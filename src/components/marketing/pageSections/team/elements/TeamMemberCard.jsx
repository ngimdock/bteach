import React from "react";
import Paragraphe from "../../../../elements/p/Paragraphe"

import twitter from "../../../../../medias/icons/twitter.png"
import linkedin from "../../../../../medias/icons/linkedin.png"


const TeamMemberCard = (props) => {

	let {
		username,
		name,
		title,
		description,
		photo,
		logo,
		alt,
		twitterLink,
		linkedinLink
	} = props

	return (

            <div className="single-item mx-auto">
                <div className="item">
                    <div className="thumb">
                        <img className="img-fluid" src={photo} alt="Thumb" />
                        <div className="overlay">
                            <h4 className="text-bold text-primary mb-3">{name}</h4>
                            <p>
                                {description}
                            </p>
                            <div className="social mt-10">
                                <ul>
                                    <li className="twitter mx-2">
                                        <a href={twitterLink} className="p-2"><img src={twitter} alt="" /></a>
                                    </li>
                                    <li className="linkedin mx-2">
                                        <a href={linkedinLink} className="p-2"><img src={linkedin} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <span className="message">
                            <a href="#"><img src={logo} alt="" className="rounded-full" /></a>
                        </span>
                        <h4 className="text-primary">@{username}</h4>
                        <span>{title}</span>
                    </div>
                </div>
            </div>
	                    
	);
}

export default TeamMemberCard;