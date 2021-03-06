import React, { useContext, useState } from "react";

import image from "../../../../medias/photos/small-bg.png";
import Paragraphe from "../../../elements/p/Paragraphe";
import BigInput2 from "../../../elements/inputs/BigInput2";
import Container from '../../../utils/Container';
import H2 from '../../../elements/titles/H2';
import searchContext from "../../../../dataManager/context/searchContext";
import { Navigate } from "react-router-dom";

const SearchRepeaterSection = () => {
	// Set local state
	const [keyword, setKeyword] = useState("")
	const [redirectToResearch, setRedirectToResearch] = useState(false)

	// Get global state
	const { addKeyword } = useContext(searchContext)

	// Some handlers
	const handleSubmitForm = () => {
		if (keyword.length > 0) {
			addKeyword(keyword)

			setRedirectToResearch(true)
		}
	}

	return(
		<Container classe="mt-20 md:mt-32 px-5 md:px-10">
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
								value={keyword}
								handleChange={(e) => setKeyword(e.target.value)}
								onSubmit={handleSubmitForm}
							/>
						</div>
					</div>
				</div>
			</div>

			{
				redirectToResearch && <Navigate to={`/search/repeaters?q=${keyword}`} />
			}
		</Container>
	);
}

export default SearchRepeaterSection;