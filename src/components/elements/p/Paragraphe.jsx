import React from 'react'

const Paragraphe = (props) => {

	const {children, classe, size} = props

	let sizeP
	if(size === "small") sizeP = "text-xs md:text-sm"
	else sizeP = "md:text-lg text-base"

	return(
		<p className={`${classe} ${sizeP} text-gray-600 font-primary`}>
			{ children }
		</p>
	)
}

export default Paragraphe