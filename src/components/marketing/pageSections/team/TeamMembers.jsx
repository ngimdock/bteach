import React from "react";

import Container from "../../../utils/Container";
import TeamMemberCard from "./elements/TeamMemberCard";

import dan from "../../../../medias/photos/dan.jpg"
import dilane from "../../../../medias/photos/dilane.jpg"
import dilane3 from "../../../../medias/photos/dilane3.jpg"
import jordan from "../../../../medias/photos/jordan.jpg"
import gaelle from "../../../../medias/photos/gaelle.jpeg"
import jugalux from "../../../../medias/photos/jugalux.png"


const TeamMembers = () => {

	return(
		<Container classe="pt-5 px-3">
			<div className="group cursor-pointer lg:mx-auto mx-2">
				<section id="team" className="team-area">
			        <div className="container mt-5 pt-10">
		                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 team-items">

		                	<TeamMemberCard
								username="danilix"
								name="Ngimdock Nzemfack"
								title="Backend Developer"
								description="Développeur frontend en React & web design. J'apprend le backend avec Nodejs, Express et Mongo DB."
								photo={dan}
								logo={dan}
								twitterLink="https://twitter.com/NZemfack?t=aqsLkE0ksQl5XggxK3PI2A&s=08"
								linkedinLink="https://www.linkedin.com/in/ngimdock-zemfack"
							/>

							<TeamMemberCard
								username="dilane3"
								name="Dilane Kombou"
								title="FullStack Developer"
								description="Développeur Web FullStack ReactJs et Nodejs, toujours en quête de compétences dans le domaine du dev."
								photo={dilane}
								logo={dilane3}
								twitterLink="https://twitter.com/DilaneKombou"
								linkedinLink="https://www.linkedin.com/in/dilane-kombou-6824b2207/"
							/>

							<TeamMemberCard
								username="jordan_jou"
								name="Jordan"
								title="Frontend Developer"
								description="I am a junior front end web developer"
								photo={jordan}
								logo={jordan}
								twitterLink="https://twitter.com/tchassijordan"
								linkedinLink="https://www.linkedin.com/in/idriss-jordan/"
							/>

							<TeamMemberCard
								username="jugalux"
								name="Gaëlle Tamho"
								title="Frontend Developer"
								description="Frontend Developer with Reactjs and ui/ux designer"
								socials=""
								photo={gaelle}
								logo={jugalux}
								twitterLink="https://twitter.com/Jugalux1"
								linkedinLink="https://www.linkedin.com/in/gaelle-tamho-909119214/"
							/>
						</div>
					</div>
				</section>
			</div>

		</Container>
	);
}

export default TeamMembers;