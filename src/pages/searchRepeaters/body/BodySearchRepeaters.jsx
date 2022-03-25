import React, { useState } from 'react';

import CurrentSearchNav from "../../../components/marketing/pageSections/search/elements/CurrentSearchNav";
import SearchFilter from "../../../components/marketing/pageSections/search/repeaters/SearchFilter";
import AllRepeater from "../../../components/marketing/pageSections/search/repeaters/AllRepeater";
import Pagination from "../../../components/marketing/pageSections/search/elements/Pagination";
import DropdownSortby from "../../../components/marketing/pageSections/search/elements/DropdownSortby";
import "../../../css/search.css";

const BodySearchRepeaters = () => {
	const [filters, setFilters] = useState([])

	const handleGetCurrentFilters = (filters) => {
		setFilters(() => filters)
	}

	return(
		<div className="lg:px-24 lg:py-8" style={{overflow: "hidden"}}>

			<CurrentSearchNav 
				discipline1="Prof de maths"
				discipline2="Prof de physique-chimie"
				discipline3="Prof d'anglais"
				discipline4="Prof d'informatique"
				discipline5="Prof de sciences"
			/>

			<p className="mt-10 mb-5 lg:ml-0 ml-4 text-2xl font-medium text-gray-500">Filtre de recherche</p>

			<SearchFilter onGetCurrentFilter={handleGetCurrentFilters} />

			<div className="mt-2">
				<DropdownSortby />
			</div>

			<AllRepeater filters={filters} />

			<Pagination />

		</div>
	)
}

export default BodySearchRepeaters;

