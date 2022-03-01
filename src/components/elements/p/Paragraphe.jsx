import React from 'react'

const Paragraphe = (props) => {

	const {children, classe} = props

	return(
		<p className={`${classe} md:text-lg text-base text-gray-600 font-primary`}>
			{ children }
		</p>
	)
}

export default Paragraphe