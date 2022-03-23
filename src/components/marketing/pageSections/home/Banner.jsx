import React from "react";

import H1 from "../../../elements/titles/H1";
import BigInput1 from "../../../elements/inputs/BigInput1";
import Container from '../../../utils/Container';
const heroTopImg = require("../../../../medias/photos/img-herotop.png")

const Banner = () => {

	return(

		<header className="home_banner1 relative">
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-1"></div>
			<Container classe="px-5 py-20 md:py-0 md:pt-10 relative z-10 flex items-center">
				<div className="home_banner3 flex flex-col items-center md:items-start">

					<div className="p-2 bg-black w-40">
						<p className="text-bold text-center"><span className="text-red-500">Business</span> <span className="text-white">&</span> <span className="text-primary">Teach</span></p>
					</div>
					
					<H1 size="big" classe="mt-5 text-center md:text-left">Retrouvez un repetiteur adapté à votre besoin et à vos moyens</H1>

					<BigInput1
						type="text"
						name="searchRepeater"
						classe="mt-10"
						placeholder='Essayez "Prof de maths Terminale"'
					/>

				</div>
				<img src={heroTopImg}
					 alt="Une enseignante de lycée et d'université"
					 className="w-80 lg:w-96 h-auto hidden md:inline-block"
				/>
			</Container>
		</header>
	)
}

export default Banner;