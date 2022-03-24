import React from 'react'
import { Link } from 'react-router-dom'

const ALink = (props) => {

	let {
		children,
		link,
		classe,
		onClick
	} = props

	return(
		<Link 
			to={link}
			className={`${classe} text-primary  hover:underline`}
			onClick={onClick}
		>
			{ children }
		</Link>
	)
}

export default ALink