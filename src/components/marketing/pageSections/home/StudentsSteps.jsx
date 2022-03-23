import React from "react";

import H2 from "../../../elements/titles/H2";
import Steps from "./elements/Steps";
import process1 from "../../../../medias/illustrations/process1.svg"
import process2 from "../../../../medias/illustrations/process2.svg"
import process3 from "../../../../medias/illustrations/process3.svg"
import Container from '../../../utils/Container';



const StudentsSteps = () => {

	return(
		<Container classe="mt-20 md:mt-32">
			<div className="container_sections_home w-full">
				
				<H2 classe="text-center">Une procédure simple pour atteindre le succès</H2>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-20 md:gap-x-20 mt-8">
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