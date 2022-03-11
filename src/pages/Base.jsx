import React, { useEffect } from 'react'
import Navbar from "../components/marketing/navbar/Navbar"
import Footer from "../components/marketing/footer/Footer"
import style from '../css/base.module.css'
import { firebaseUserGetCurrentUser } from '../api/Users'
import { firebaseServiceGetServices } from '../api/Services'

const Base = ({ children }) => {

	useEffect(() => {
		// Get current user
		firebaseUserGetCurrentUser()

		// Get list of service
		firebaseServiceGetServices()

		// if (data) {
		// 	console.log(data)
		// } else {
		// 	console.log(error)
		// }
	}, [])

	return(
		<>
			<Navbar />
		
			<main className={style.content}>
				{ children }
			</main>

			<Footer />
		</>
	)
}

export default Base