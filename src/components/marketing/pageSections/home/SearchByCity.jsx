import React, { useContext } from "react";

import H2 from "../../../elements/titles/H2";
import Button from "../../../elements/buttons/Button";
import CityCircle from "./elements/CityCircle";
import Container from '../../../utils/Container';
import Paragraphe from '../../../elements/p/Paragraphe';
import currentUserContext from '../../../../dataManager/context/currentUserContext'


const SearchByCity = () => {
	const { currentUser } = useContext(currentUserContext)

	return(
		<Container classe="mt-20 md:mt-40 px-5 md:px-10">
			<H2 classe="text-center">Les meilleurs repétiteurs dans votre ville</H2>
			<Paragraphe classe="text-center mt-3">Chercher les repétiteurs près de chez vous</Paragraphe>
			<div className="my-5 py-2"></div>

			<div className="grid justify-items-center gap-y-10 lg:gap-y-0 mx-auto items-center sm:grid-cols-2 lg:grid-cols-4">
				<CityCircle name="Yaoundé" color="secondary" />
				<CityCircle name="Douala" color="dark" />
				<CityCircle name="Bafoussam" color="black" />
				<CityCircle name="Bamenda" color="primary" />
			</div>

			{
				!currentUser && (
					<div className="mt-16 flex justify-center">
						<Button  size="big" theme="red" classe="mt-1">Inscription</Button>
					</div>
				)
			}
		</Container>
	);
}

export default SearchByCity;