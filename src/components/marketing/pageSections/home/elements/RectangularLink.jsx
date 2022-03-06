import React from 'react';
import { Link } from 'react-router-dom';

const RectangularLink = (props) => {

	let {
		children,
		link,
		classe
	} = props

	return(
		<div className="mx-auto my-3">
			<Link 
				to={link}
				className={`${classe} px-8 py-3 text-white bg-gray-300  hover:bg-gray-500 transition ease-in-out`}
				>
				{ children }
			</Link>
		</div>
	)
}

export default RectangularLink;