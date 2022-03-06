import React from "react";

import Paragraphe from "../../../../elements/p/Paragraphe"


const Steps = (props) => {

	let {
		number,
		image,
		alt,
		title,
		description,
		classe
	} = props

	return(

		<div className={`${classe}`}>

			<div className="flex">
				<div>
					<p className="number">{number}</p>
				</div>
				<img src={image} alt={alt} className="img_steps" />
			</div>

			<div>
				<Paragraphe classe="font-bold">{title}</Paragraphe>
				<Paragraphe>{description}</Paragraphe>
			</div>
			
		</div>

	);
}

export default Steps;