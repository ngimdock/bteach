import React from 'react'

import CurrentSearchNav from "../../../components/marketing/pageSections/search/elements/CurrentSearchNav";
import DropdownSubjects from "../../../components/marketing/pageSections/search/elements/DropdownSubjects";
import DropdownCities from "../../../components/marketing/pageSections/search/elements/DropdownCities";
import DropdownGender from "../../../components/marketing/pageSections/search/elements/DropdownGender";
import AllClients from "../../../components/marketing/pageSections/search/clients/AllClients";
import Pagination from "../../../components/marketing/pageSections/search/elements/Pagination";
import Button from "../../../components/elements/buttons/Button";


const BodySearchClients = () => {
	return(

		<div className="lg:px-24 lg:py-8">

			<CurrentSearchNav 
				discipline1="Prof de maths"
				discipline2="Prof de physique-chimie"
				discipline3="Prof d'anglais"
				discipline4="Prof d'informatique"
				discipline5="Prof de sciences"
			/>

			<p className="mt-14 mb-7 lg:ml-0 ml-4 text-2xl font-medium text-gray-500">Filtre de recherche</p>

			<div className="grid lg:grid-cols-2">
				<div className="grid lg:grid-cols-3 grid-cols-2 mt-2 md:grid-cols-3">
					<DropdownSubjects />
					<DropdownCities />
					<DropdownGender />
				</div>
				<div className="lg:ml-5 lg:mt-0 mt-5 lg:mx-0 mx-auto">
					<Button  size="medium" theme="primary">Inscription</Button>
				</div>
			</div>

			<p className="mt-14 mb-7 lg:ml-0 ml-4 mr-2 text-2xl font-medium text-gray-500">Ils veulent se faire accompagner par un repétiteur</p>

			<AllClients />

		</div>
	)
}

export default BodySearchClients;