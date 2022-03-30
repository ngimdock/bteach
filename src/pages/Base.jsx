import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Navbar from "../components/marketing/navbar/Navbar"
import Footer from "../components/marketing/footer/Footer"
import style from '../css/base.module.css'
import { firebaseUserGetCurrentUser } from '../api/Users'
import { 
	firebaseServiceGetServices
} from '../api/Services'
import currentUserContext from '../dataManager/context/currentUserContext'
// import { firebaseGetNotes } from '../api/Notes'
import serviceContext from '../dataManager/context/servicesContext'
import ChooseTypeOfSignupForm from '../components/utils/modals/ChooseTypeOfSignupForm'

const Base = ({ children, backgroundColor }) => {
	const defaultBackgroundColor = backgroundColor ? backgroundColor:"#fff"

	// Set local state
	const [isModalOpen, setIsModalOpen] = useState(false)

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
	}, [])

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0
		})
	}, [])

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return(
		<>
			<Navbar onCloseModal={handleCloseModal} onOpenModal={handleOpenModal} />
		
			<main className={style.content} style={{ backgroundColor: defaultBackgroundColor }}>
				{ children }
			</main>

			<Footer />

			{
				isModalOpen && <ChooseTypeOfSignupForm isOpen={isModalOpen} closeModal={handleCloseModal} />
			}
		</>
	)
}

export default Base