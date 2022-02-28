import React from 'react'

import Navbar from "../components/marketing/navbar/Navbar"
import Footer from "../components/marketing/footer/Footer"

const Base = ({ children }) => {
	return(
		<div>
			<Navbar />
			{ children }
			<Footer />
		</div>
	)
}

export default Base