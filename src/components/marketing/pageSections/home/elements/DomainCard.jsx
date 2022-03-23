import React from "react";

import Paragraphe from "../../../../elements/p/Paragraphe"


const DomainCard = (props) => {

	let {
		image,
		alt,
		discipline
	} = props

	return(

		<div className="DomainCard group cursor-pointer lg:mx-auto mx-2">

				<div className="">
					<div className="domain group-hover:hidden"></div>
					<img src={image} alt={alt} className="img_card" />
				</div>

				<div className="DomainCard_text">
					<Paragraphe classe="font-bold text-gray-100">{discipline}</Paragraphe>
				</div>
			
		</div>

	);
}

export default DomainCard;