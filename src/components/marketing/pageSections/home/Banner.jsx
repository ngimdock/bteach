import React from "react";

import H1 from "../../../elements/titles/H1";
import BigInput1 from "../../../elements/inputs/BigInput1";

const Banner = () => {

	return(

		<header className="home_banner1">
		    <div className="home_banner2">
				<div className="home_banner3 lg:pl-28 pl-5 pr-5 pt-20">

					<div className="p-2 bg-black w-40">
						<p className="text-bold text-center"><span className="text-red-500">Business</span> <span className="text-white">&</span> <span className="text-primary">Teach</span></p>
					</div>
					
					<H1 classe="mt-5 lg:w-1/2">Retrouvez un repetiteur adapté à votre besoin et à vos moyens</H1>

					<BigInput1
						type="text"
						name="searchRepeater"
						classe="mt-10 lg:w-1/2"
						placeholder='Essayez "Prof de maths Terminale"'
					/>

				</div>
			</div>
		</header>
	)
}

export default Banner;