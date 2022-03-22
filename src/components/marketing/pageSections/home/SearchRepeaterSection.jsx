import React from "react";

import image from "../../../../medias/photos/small-bg.png";
import Paragraphe from "../../../elements/p/Paragraphe";
import BigInput2 from "../../../elements/inputs/BigInput2";
import Container from '../../../utils/Container';



const SearchRepeaterSection = () => {

	return(
		<Container classe="bg-gray-400 mt-32">
			<div className="grid grid-cols-4">
				<div>
					<img src={image} alt="smile student" className="img_section col-span-1" />
				</div>
				<div className="my-5 py-2 lg:mt-12 lg:px-0 px-5 col-span-3">
					<p className="text-2xl font-medium text-gray-500">Le sourire sur le visage de nos apprenants</p>

					<Paragraphe classe="text-gray-500 mt-5">
						Le plus beau cadeau qu'un parent puisse offrir à ses enfants est d'assurer leur éducation
					</Paragraphe>

					<Paragraphe classe="text-gray-500 mt-5">
						Les répétiteurs de <span className="text-dark">Bteach</span> garantissent à vos enfants d'obtenir les notes qu'ils méritent dans leurs différents cours.
					</Paragraphe>

					<BigInput2
						type="text"
						name="searchRepeater"
						classe="mt-10 lg:w-3/4"
						placeholder='Essayez "Prof de physique Terminale"'
					/>
				</div>
			</div>
		</Container>
	);
}

export default SearchRepeaterSection;