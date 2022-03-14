import React from "react";

import Button from "../../../../elements/buttons/Button";
import DropdownSubjects from "../elements/DropdownSubjects";
import DropdownCities from "../elements/DropdownCities";
import DropdownGender from "../elements/DropdownGender";
import RadioButton from "../elements/RadioButton";
import PricePerMonth from "../elements/PricePerMonth"


const SearchFilter = () => {

	return(

		<div className="SearchFilterBox lg:py-3 lg:px-5">
			
			<div className="grid lg:grid-cols-2">
				<div>
					<div className="grid lg:grid-cols-3 grid-cols-2 lg:mt-2 mt-7 md:grid-cols-3">
						<DropdownSubjects />
						<DropdownCities />
						<DropdownGender />
					</div>
					<div className="mt-7 flex">
						<p className="text-bold text-gray-500">Lieux cours :</p>
						<div className="ml-3">
							<RadioButton name="courseLocation" items={['Chez élève', 'Chez prof', 'En ligne']}/>
						</div>
					</div>
				</div>

				<div className="lg:ml-32">
					<div className="mt-3 flex">
						<p className="text-bold mx-4 text-gray-500">Tarif/mois</p>
						<div>
							<PricePerMonth />
						</div>
					</div>
					<div className="mt-9 flex">
						<p className="text-bold mx-4 text-gray-500">Niveau :</p>
						<div className="ml-3">
							<RadioButton name="level" items={['Primaire', 'Secondaire', 'Lycée']}/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center lg:mt-5">
				<Button  size="medium" theme="primary" classe="mt-1">Inscription</Button>
			</div>

		</div>

	);
}

export default SearchFilter;