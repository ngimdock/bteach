import React, { useCallback, useContext, useEffect, useState } from "react";

import RepeaterCard from "../elements/RepeaterCard";
import serviceContext from "../../../../../dataManager/context/servicesContext";
import Service from '../../../../../entities/Service'

const getFilters = (filters) => {
	const FILTERS_SCHEMA = {
		matiere: new Set(),
		sexe: new Set(),
		niveau: new Set(),
		lieu: new Set(),
		ville: new Set()
	}

	// Fill the template
	filters.forEach(filter => {
		FILTERS_SCHEMA[filter.type].add(filter)
	})

	return [
		[...FILTERS_SCHEMA.matiere],
		[...FILTERS_SCHEMA.sexe],
		[...FILTERS_SCHEMA.niveau],
		[...FILTERS_SCHEMA.lieu],
		[...FILTERS_SCHEMA.ville],
	]
}

const getSexe = (gender) => {
	if (gender === "homme") {
		return "masculin"
	}

	return "feminin"
}

const AllRepeater = ({ filters }) => {
	// Get data from the global state
	const { services } = useContext(serviceContext)

	// Set local state
	const [Localfilters, setLocalFilters] = useState(filters)
	// const [servicesToDisplay, setServicesToDisplay] = useState(services)

	useEffect(() => {
		setLocalFilters(filters)
		
		console.log(Localfilters)
	}, [filters])

	const displayServiceBasedOnFilters = () => {
		if (Localfilters.length === 0) {
			return services
		} else {
			// Get the base template
			const baseFilters = getFilters(Localfilters)

			let servicesFiltered = [...services]

			baseFilters.forEach(filter => {
				servicesFiltered = getFilteredServices(filter, servicesFiltered)
			})

			return servicesFiltered
		}
	}

	const getFilteredServices = (filter, services) => {
		if (filter.length > 0) {
			const getFiltersValues = (filters) => {
				const d =	filters.map(f => f.value)
				
				console.log(d)
				return d
			}

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
	
				default: return services
			}
		}

		return services
	}

	return(

		<div className="my-5 grid lg:grid-cols-3 md:grid-cols-2">
			{
				displayServiceBasedOnFilters().map(service => {
					console.log(service.getOwner)
					return (
						<RepeaterCard
							key={service.getId}
							data={service}
						/>
					)
				})
			}
		</div>

	);
}

export default AllRepeater;