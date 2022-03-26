import React from "react";

const DISCIPLINES = [
	{
		id: 1,
		value: "Prof de physique-chimie",
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "physique"
			},
			{
				id: 2,
				type: "matiere",
				value: "chimie"
			}
		]
	},
	{
		id: 2,
		value: "Prof d'anglais",
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "anglais"
			}
		]
	},
	{
		id: 3,
		value: "Prof d'informatique",
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "informatique"
			}
		]
	},
	{
		id: 4,
		value: "Prof de sciences",
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "sciences"
			}
		]
	}
]


const CurrentSearchNav = ({ onGetCurrentFilter }) => {

	const handleSelectFilter = (filters) => {
		onGetCurrentFilter(filters)
	}

	return(
		<div className="CurrentSearchNav">
			{
				DISCIPLINES.map(disc => {
					return (
						<p 
							style={{ cursor: "pointer" }}
							key={disc.id}
							onClick={() => handleSelectFilter(disc.filters)}
						>
							{ disc.value }
						</p>
					)
				})
			}
		</div>
	);
}

export default CurrentSearchNav;