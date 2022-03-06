import React from "react";

import H3 from "../../../elements/titles/H3";
import Button from "../../../elements/buttons/Button";
import CityCircle from "./elements/CityCircle";



const SearchByCity = () => {

	return(

		<div className="container_sections_home">

			<H3 classe="text-center font-medium">Les meilleurs repétiteurs dans votre ville</H3>
			<p className="text-center">Chercher les repétiteurs près de chez vous</p>
			<div className="my-5 py-2"></div>

			<div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-x-8 md:gap-x-8 mb-10">
				<CityCircle name="Yaoundé" color="dark" />
				<CityCircle name="Douala" color="primary" />
				<CityCircle name="Bafoussam" color="dark" />
				<CityCircle name="Bamenda" color="danger" />
			</div>

			<div className="flex justify-center">
				<Button  size="small" theme="danger" classe="mt-1">Inscription</Button>
			</div>

		</div>

	);
}

export default SearchByCity;