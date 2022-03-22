import React from "react";

import H3 from "../../../elements/titles/H3";
import Button from "../../../elements/buttons/Button";
import CityCircle from "./elements/CityCircle";
import Container from '../../../utils/Container';


const SearchByCity = () => {

	return(
		<Container classe="mt-32">
			<H3 classe="text-center font-medium">Les meilleurs repétiteurs dans votre ville</H3>
			<p className="text-center">Chercher les repétiteurs près de chez vous</p>
			<div className="my-5 py-2"></div>

			<div className="grid justify-items-center gap-y-10 lg:gap-y-0 mx-auto items-center sm:grid-cols-2 lg:grid-cols-4">
				<CityCircle name="Yaoundé" color="secondary" />
				<CityCircle name="Douala" color="dark" />
				<CityCircle name="Bafoussam" color="black" />
				<CityCircle name="Bamenda" color="primary" />
			</div>

			<div className="mt-16 flex justify-center">
				<Button  size="big" theme="red" classe="mt-1">Inscription</Button>
			</div>
		</Container>
	);
}

export default SearchByCity;