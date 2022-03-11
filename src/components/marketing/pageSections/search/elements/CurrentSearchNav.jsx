import React from "react";


const CurrentSearchNav = (props) => {

	let {
		discipline1,
		discipline2,
		discipline3,
		discipline4,
		discipline5,
	} = props

	return(

		<div className="CurrentSearchNav">
			
			<p>{discipline1}</p>
			<p>{discipline2}</p>
			<p>{discipline3}</p>
			<p>{discipline4}</p>
			<p>{discipline5}</p>

		</div>

	);
}

export default CurrentSearchNav;