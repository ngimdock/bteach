import React from 'react';

import CurrentSearchNav from "../../../components/marketing/pageSections/search/elements/CurrentSearchNav";
import H2 from "../../../components/elements/titles/H2";
import SearchFilter from "../../../components/marketing/pageSections/search/repeaters/SearchFilter";
import AllRepeater from "../../../components/marketing/pageSections/search/repeaters/AllRepeater";
import Pagination from "../../../components/marketing/pageSections/search/elements/Pagination";
import DropdownSortby from "../../../components/marketing/pageSections/search/elements/DropdownSortby";

import search from "../../../css/search.css";


const BodySearchRepeaters = () => {
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

			<SearchFilter />

			<div className="mt-7">
				<DropdownSortby />
			</div>

			<AllRepeater />

		</div>
	)
}

export default BodySearchRepeaters;

