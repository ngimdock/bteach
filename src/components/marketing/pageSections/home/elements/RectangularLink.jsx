import React from 'react';
import { Link } from 'react-router-dom';

const RectangularLink = (props) => {

	let {
		children,
		link,
		classe,
		onClick
	} = props

	return(
		<div className={`${classe} mx-auto my-3`}>
			<Link 
				to={link}
				className={`px-8 py-3 text-white bg-gray-300  hover:bg-dark transition ease-in-out duration-300`}
				onClick={onClick}
				>
				{ children }
			</Link>
		</div>
	)
}

export default RectangularLink;