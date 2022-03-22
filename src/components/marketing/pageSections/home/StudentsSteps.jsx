import React from "react";

import H3 from "../../../elements/titles/H3";
import Steps from "./elements/Steps";
import process1 from "../../../../medias/illustrations/process1.png"
import process2 from "../../../../medias/illustrations/process2.png"
import process3 from "../../../../medias/illustrations/process3.png"
import Container from '../../../utils/Container';



const StudentsSteps = () => {

	return(
		<Container>
			<div className="container_sections_home">
				
				<H3 classe="text-center font-medium text-gray-500">Une procédure simple pour atteindre le succès</H3>
				<div className="my-5 py-2"></div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-20 md:gap-x-20">
					<Steps 
						number="1"
						image={process1}
						title="Chercher le repetiteur conforme"
						description="à votre niveau, série et budget"
						classe="mx-auto my-5 steps"
					/>
					<Steps 
						number="2"
						image={process2}
						title="Se faire suivre par un professionnel"
						description="qui vous donne le savoir nécessaire"
						classe="mx-auto my-5 steps"
					/>
					<Steps 
						number="3"
						image={process3}
						title="Valider ses unités d'enseignements"
						description="avec des notes que vous méritez"
						classe="mx-auto my-5 steps"
					/>
				</div>

			</div>
		</Container>
	);
}

export default StudentsSteps;