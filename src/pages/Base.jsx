import React, { useCallback, useContext, useEffect, useRef } from 'react'
import Navbar from "../components/marketing/navbar/Navbar"
import Footer from "../components/marketing/footer/Footer"
import style from '../css/base.module.css'
import { firebaseUserGetCurrentUser } from '../api/Users'
import { firebaseServiceGetServices, firebaseServiceUpdateService } from '../api/Services'
import currentUserContext from '../dataManager/context/currentUserContext'
// import { firebaseGetNotes } from '../api/Notes'
import serviceContext from '../dataManager/context/servicesContext'

const Base = ({ children, backgroundColor }) => {
	const defaultBackgroundColor = backgroundColor ? backgroundColor:"#fff"

	// Get Global state
	const { login } = useContext(currentUserContext)
	const { addAllServices } = useContext(serviceContext)

	const addAllServicesCb = useCallback(() => addAllServices, [addAllServices])
	const loginCb = useCallback(() => login, [login])
	const addAllServicesRef = useRef(addAllServicesCb)
	const loginRef = useRef(loginCb)

	useEffect(() => {
		addAllServicesRef.current = addAllServicesCb
	}, [addAllServicesCb])

	useEffect(() => {
		loginRef.current = loginCb
	}, [loginCb])

	useEffect(() => {
		// Get current user
		firebaseUserGetCurrentUser(loginRef.current())

		// Get list of service
		firebaseServiceGetServices(addAllServicesRef.current())

		// Get notes
		// firebaseGetNotes("jVpgh96a2ApbikGVxJMx")

		// if (data) {
		// 	console.log(data)
		// } else {
		// 	console.log(error)
		// }

		const data = {
			minPrice: 20000,
			currentGradeLevel: "Etudiant en master",
			teachingUnit: ["mathematiques", "chimie", "anglais"],
			levelsUnit: ["terminal"],
			coursesType: ["renforcement"],
			coursesLocation: ["chez eleve", "chez prof"],
			description: "je suis un bon prof",
      isVisible: true
		}

		updateService(data)
	}, [])

	const updateService = async (data) => {
		await firebaseServiceUpdateService("Ol0I5hJQawJdk0WwRJ1I", data)
	}

	return(
		<>
			<Navbar />
		
			<main className={style.content} style={{ backgroundColor: defaultBackgroundColor }}>
				{ children }
			</main>

			<Footer />
		</>
	)
}

export default Base