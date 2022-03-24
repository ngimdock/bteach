import React from "react";
import Paragraphe from "../../../../elements/p/Paragraphe"

const DomainCard = (props) => {

	let {
		image,
		alt,
		discipline,
		filters,
		onSelectFilter
	} = props

	return (
		<div 
			onClick={() => onSelectFilter(filters)} 
			className="DomainCard group cursor-pointer lg:mx-auto mx-2"
		>
			<div className="">
				<div className="domain group-hover:hidden"></div>
				<img src={image} alt={alt} className="img_card" />
			</div>

			<div className="DomainCard_text">
				<Paragraphe classe="group-hover:text-primary font-bold text-gray-100 transition linear">{discipline}</Paragraphe>
			</div>
		</div>
	);
}

export default DomainCard;