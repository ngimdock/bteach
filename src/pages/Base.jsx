import React from 'react'

import Navbar from "../components/marketing/navbar/Navbar"
import Footer from "../components/marketing/footer/Footer"
import style from '../css/base.module.css'

const Base = ({ children }) => {
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