import React, { useContext, useEffect, useState } from "react";

import RepeaterCard from "../elements/RepeaterCard";
import serviceContext from "../../../../../dataManager/context/servicesContext";

const getFilters = (filters) => {
	const FILTERS_SCHEMA = {
		matiere: new Set(),
		sexe: new Set(),
		niveau: new Set(),
		lieu: new Set(),
		ville: new Set(),
		keyword: new Set()
	}

	// Fill the template
	filters.forEach(filter => {
		// if (filter.type !== "keyword")
		FILTERS_SCHEMA[filter.type].add(filter)
	})

	return [
		[...FILTERS_SCHEMA.matiere],
		[...FILTERS_SCHEMA.sexe],
		[...FILTERS_SCHEMA.niveau],
		[...FILTERS_SCHEMA.lieu],
		[...FILTERS_SCHEMA.ville],
		[...FILTERS_SCHEMA.keyword]
	]
}

const getSexe = (gender) => {
	if (gender === "homme") {
		return "masculin"
	}

	return "feminin"
}

const compareString = (key, sources) => {
	const keywordItems = key.toLowerCase().split(/[\s']+/)
	let exist = false

	for (let source of sources) {
		for (let keyword of keywordItems) {
			if (keyword.length > 1) {
				const regex = new RegExp(keyword)
	
				if (source.toLowerCase().match(regex)) {
					exist = true
		
					break
				}
			}
		}
	}

	return exist
}

const searchServicesFromKeyword = (keyword, services) => {

	const servicesFiltered = services.filter(service => {
		if (compareString(keyword, service.teachingUnit)) {
			return true
		} else if (compareString(keyword, [service.owner.town])) {
			return true
		} else if (compareString(keyword, [service.owner.district])) {
			return true
		} else if (compareString(keyword, service.levelsUnit)) {
			return true
		}

		return false
	})

	return servicesFiltered
}

const AllRepeater = ({ filters }) => {
	// Get data from the global state
	const { services } = useContext(serviceContext)

	// Set local state
	const [Localfilters, setLocalFilters] = useState(filters)
	// const [servicesToDisplay, setServicesToDisplay] = useState(services)

	useEffect(() => {
		setLocalFilters(filters)
	}, [filters])

	const displayServiceBasedOnFilters = () => {
		if (Localfilters.length === 0) {
			return services
		} else {
			// Get the base template
			const baseFilters = getFilters(Localfilters)

			let servicesFiltered

			servicesFiltered = [...services]

			baseFilters.forEach(filter => {
				servicesFiltered = getFilteredServices(filter, servicesFiltered)
			})

			return servicesFiltered
		}
	}

	const getFilteredServices = (filter, services) => {
		if (filter.length > 0) {
			const getFiltersValues = (filters) => filters.map(f => f.value)

			switch (filter[0].type) {
				case "matiere": {
					return services.filter(service => service.teachingUnit.some(unit => getFiltersValues(filter).includes(unit)))
				}
	
				case "sexe": {
					return services.filter(service => getFiltersValues(filter).includes(getSexe(service.owner.sex)))
				}
	
				case "niveau": {
					return services.filter(service => service.categories.some(cat => getFiltersValues(filter).includes(cat)))
				}
	
				case "lieu": {
					return services.filter(service => service.coursesLocation.some(location => getFiltersValues(filter).includes(location)))
				}
	
				case "ville": {
					return services.filter(service => getFiltersValues(filter).includes(service.owner.town))
				}

				case "keyword": {
					return searchServicesFromKeyword(getFiltersValues(filter)[0], services)
				}
	
				default: return services
			}
		}

		return services
	}

	return(
		<>
			<div className="my-5 grid lg:grid-cols-3 md:grid-cols-2">
				{
					displayServiceBasedOnFilters().length > 0 && (
						displayServiceBasedOnFilters().map(service => {
							return (
								<RepeaterCard
									key={service.getId}
									data={service}
								/>
							)
						})
					)
				}
			</div>

			{
				displayServiceBasedOnFilters().length === 0 && (
					<span
						className="border-2 border-rounded"
						style={{
							width: "100%",
							height: "auto",
							padding: "20px 10px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: 18
						}}
					>
						Pas de resultats
					</span>
				)
			}
		</>

	);
}

export default AllRepeater;