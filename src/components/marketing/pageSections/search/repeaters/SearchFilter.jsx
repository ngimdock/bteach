import React, { useEffect, useState } from "react";

import DropdownSubjects from "../elements/DropdownSubjects";
import DropdownCities from "../elements/DropdownCities";
import DropdownGender from "../elements/DropdownGender";
import RadioButton from "../elements/RadioButton";
import PricePerMonth from "../elements/PricePerMonth"
import { BsX } from 'react-icons/bs'

const FilterItem = ({ color, data, onDeleteFilter }) => {
	return (
		<div
			className='px-2 py-1 mx-1 my-1'
			style={{ 
				width: "auto",
				height: "auto", 
				display: "flex",
				borderRadius: 5,
				backgroundColor: color,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<span className='ml-2' style={{ color: "#fff" }}>{ data.value }</span>
			<span 
				className='mx-1' 
				style={{ fontSize: 14, cursor: "pointer" }}
				onClick={() => onDeleteFilter(data.id)}
			>
				<BsX size={25} color="#fff" />
			</span>
		</div>
	)
}

const SearchFilter = ({ onGetCurrentFilter }) => {
	const [filters, setFilter] = useState([])

	const colors = {
		matiere: "#00b4d8",
		sexe: "#fb8500",
		niveau: "#ef476f",
		lieu: "#008000",
		ville: "#1f2421"
	}

	useEffect(() => {
		onGetCurrentFilter(filters)
	}, [filters])

	const handleAddFilter = (type, value) => {
		const id = filters.length === 0 ? 1:filters[filters.length-1].id + 1

		const filter = {
			id,
			type,
			value
		}

		let exist = false

		filters.forEach(filter => {
			if (filter.type === type && filter.value === value) {
				exist = true
			}
		})

		if (!exist)
			setFilter([...filters, filter])
	}

	const handleDeleteFilter = (id) => {
		const newFilters = filters.filter(fil => fil.id !== id)

		setFilter(newFilters)
	}

	return(
		<>
			<div className="SearchFilterBox lg:py-3 lg:px-5">
				<div className="grid lg:grid-cols-2">
					<div>
						<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:mt-2 mt-7">
							<DropdownSubjects onAddFilter={handleAddFilter} />
							<DropdownCities onAddFilter={handleAddFilter} />
							<DropdownGender onAddFilter={handleAddFilter} />
						</div>
						<div className="mt-7 flex">
							<p className="text-bold ml-4 text-gray-500">Lieux cours :</p>
							<div className="ml-3">
								<RadioButton 
									onAddFilter={handleAddFilter}
									name="lieu" 
									items={['Chez élève', 'Chez prof', 'En ligne']}
								/>
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
								<RadioButton 
									onAddFilter={handleAddFilter}
									name="niveau" 
									items={['Primaire', 'Secondaire', 'Lycée']}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="filters-section mt-3">
				<p className="text-bold mx-4">Les Filtres:</p>

				<div className="mx-2 mt-4 py-2 px-2 w-auto filters-items">
					{
						filters.map(filter => {
							return <FilterItem 
								key={filter.id} 
								color={colors[filter.type]} 
								data={filter} 
								onDeleteFilter={handleDeleteFilter}
							/>
						})
					}
				</div>
			</section>
		</>

	);
}

export default SearchFilter;