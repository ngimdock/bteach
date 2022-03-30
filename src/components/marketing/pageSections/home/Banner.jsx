import React, { useContext, useState } from "react";

import H1 from "../../../elements/titles/H1";
import BigInput1 from "../../../elements/inputs/BigInput1";
import Container from '../../../utils/Container';
import searchContext from "../../../../dataManager/context/searchContext";
import { Navigate } from "react-router-dom";
const heroTopImg = require("../../../../medias/photos/img-herotop.png")

const Banner = () => {
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

		<header className="home_banner1 relative">
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-1"></div>
			<Container classe="px-5 py-20 md:py-0 md:pt-10 relative z-10 flex items-center">
				<div className="home_banner3 flex flex-col items-center md:items-start">

					<div className="p-2 bg-black w-40">
						<p className="text-bold text-center"><span className="text-red-500">Business</span> <span className="text-white">&</span> <span className="text-primary">Teach</span></p>
					</div>
					
					<H1 size="big" classe="mt-5 text-center md:text-left">Retrouvez un répétiteur adapté à votre besoin et à vos moyens</H1>

					<BigInput1
						type="text"
						name="searchRepeater"
						classe="mt-10"
						placeholder='Essayez "Prof de maths Terminale"'
						value={keyword}
						handleChange={(e) => setKeyword(e.target.value)}
						onSubmit={handleSubmitForm}
					/>

				</div>
				<img src={heroTopImg}
					 alt="Une enseignante de lycée et d'université"
					 className="w-80 lg:w-96 h-auto hidden md:inline-block"
				/>
			</Container>

			{
				redirectToResearch && <Navigate to={`/search/repeaters?q=${keyword}`} />
			}
		</header>
	)
}

export default Banner;