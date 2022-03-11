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

		<div className="CurrentSearchNav flex justify-center">
			
			<p className="mx-10">{discipline1}</p>
			<p className="mx-10">{discipline2}</p>
			<p className="mx-10">{discipline3}</p>
			<p className="mx-10">{discipline4}</p>
			<p className="mx-10">{discipline5}</p>

		</div>

	);
}

export default CurrentSearchNav;