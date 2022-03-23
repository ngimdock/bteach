import React from "react";

import image from "../../../../medias/photos/small-bg.png";
import Paragraphe from "../../../elements/p/Paragraphe";
import BigInput2 from "../../../elements/inputs/BigInput2";
import Container from '../../../utils/Container';
import H3 from '../../../elements/titles/H3';
import H2 from '../../../elements/titles/H2';



const SearchRepeaterSection = () => {

	return(
		<Container classe="mt-16 px-5 md:px-10">
			<div className="flex flex-col space-y-3 md:space-x-6 lg:space-x-10 items-center md:flex-row">
				<img src={image} alt="smile student" className="img_section hidden md:inline-block w-40 h-auto md:w-72 lg:w-80 " />
				<div className="shrink flex flex-col items-center md:items-start my-5 py-2 lg:mt-12 lg:px-0">
					<H2 classe="text-center md:text-left">Le sourire sur le visage de nos apprenants</H2>
					<div className="flex flex-col items-center mt-8 md:mt-0">
						<img src={image} alt="smile student" className="img_section inline-block md:hidden mx-auto w-60 h-auto md:w-80 " />
						<div className="mt-8">
							<Paragraphe>
								Le plus beau cadeau qu'un parent puisse offrir à ses enfants est d'assurer leur éducation
							</Paragraphe>

							<Paragraphe classe="mt-5">
								Les répétiteurs de <span className="text-dark">Bteach</span> garantissent à vos enfants d'obtenir les notes qu'ils méritent dans leurs différents cours.
							</Paragraphe>

							<BigInput2
								type="text"
								name="searchRepeater"
								classe="mt-5 md:mt-10 lg:w-3/4"
								placeholder='Essayez "Prof de physique Terminale'
							/>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default SearchRepeaterSection;