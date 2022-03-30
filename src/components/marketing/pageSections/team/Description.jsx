import React from "react";

import H3 from "../../../elements/titles/H3";
import Container from "../../../utils/Container";
import team from "../../../../medias/illustrations/team.png";

const Description = () => {

	return(
		<Container classe="pt-5 px-5">
			<H3 classe="text-start my-5">Equipe de développeurs</H3>
			<div className="grid lg:grid-cols-2 pt-2">
				<div className="lg:order-2 lg:ml-5">
					<img src={team} alt='team' />
				</div>
				<div className="lg:order-1 mt-5 text-gray-600">
					Nous tenons à remercier tous ceux qui, de près ou de loin, ont participé ou
					aidé pour la réalisation de ce projet de solution challenge 2022.
					L'idée était de créer une plateforme en ligne pour aider élèves et étudiants à retrouver
					des repétiteurs pour les suivre dans leurs parcours.
				</div>
			</div>
		</Container>
	);
}

export default Description;