import React, { useContext, useState } from "react";

import H2 from "../../../elements/titles/H2";
import DomainCard from "./elements/DomainCard";
import youngMan from "../../../../medias/photos/young-african-man-standing-isolated (1) (1).jpg"
import gabrielMatula from "../../../../medias/photos/gabriel-matula-Qhd1tEZo1ew-unsplash (1).jpg"
import businessWoman from "../../../../medias/photos/african-american-business-woman-by-window (1) (1).jpg"
import blackMan from "../../../../medias/photos/smiling-sporty-black-man-standing-with-his-arms-crossed (1) (2).jpg"
import africanWomen from "../../../../medias/photos/africanWomen.jpg"
import handsomeMan from "../../../../medias/photos/handsome-young-man-dressed-shirt (1) (1).jpg"
import stylish from "../../../../medias/photos/stylish-black-girl (1) (1).jpg"
import shallow from "../../../../medias/photos/shallow-focus-shot-young-black-male-grey-wall (1).jpg"
import Container from '../../../utils/Container';
import searchContext from "../../../../dataManager/context/searchContext";
import { Navigate } from "react-router-dom";

const domains = [
	{
		id: 1,
		discipline: "Professeur de mathematique 3ieme, 1ere et Tle",
		image: youngMan,
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "mathematiques"
			},
			{
				id: 2,
				type: "niveau",
				value: "secondaire"
			}
		]
	},
	{
		id: 2,
		discipline: "Professeur de physique chimie 3ieme, 1ere et Tle",
		image: gabrielMatula,
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
			},
			{
				id: 3,
				type: "niveau",
				value: "secondaire"
			}
		]
	},
	{
		id: 3,
		discipline: "Professeur d'anglais, de 6ieme en Tle",
		image: businessWoman,
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "anglais"
			},
			{
				id: 2,
				type: "niveau",
				value: "secondaire"
			}
		]
	},
	{
		id: 4,
		discipline: "Professeur algebre & analyse de L1 à L3",
		image: blackMan,
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "mathematiques"
			},
			{
				id: 3,
				type: "niveau",
				value: "université"
			}
		]
	},
	{
		id: 5,
		discipline: "Professeur d'informatique de 3e en Tle",
		image: africanWomen,
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "informatique"
			},
			{
				id: 3,
				type: "niveau",
				value: "secondaire"
			}
		]
	},
	{
		id: 6,
		discipline: "Professeur de l'école primaire",
		image: handsomeMan,
		filters: [
			{
				id: 3,
				type: "niveau",
				value: "primaire"
			}
		]
	},
	{
		id: 7,
		discipline: "Professeur chimie & biochimie de L1 à L3",
		image: stylish,
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "chimie"
			},
			{
				id: 2,
				type: "matiere",
				value: "biochimie"
			},
			{
				id: 3,
				type: "niveau",
				value: "université"
			}
		]
	},
	{
		id: 8,
		discipline: "Professeur de PCT de 6e en 3e",
		image: shallow,
		filters: [
			{
				id: 1,
				type: "matiere",
				value: "chimie"
			},
			{
				id: 2,
				type: "matiere",
				value: "physique"
			},
			{
				id: 3,
				type: "niveau",
				value: "secondaire"
			}
		]
	}
]

const RepeaterDomains = () => {
	// Get global state
	const { addFilters } = useContext(searchContext)

	// Set local state
	const [redirectToSearch, setRedirectToSearch] = useState(false)

	const handleAddFilter = (filters) => {
		addFilters(filters)
		setRedirectToSearch(true)
	}

	return(
		<Container classe="mt-20 md:mt-32">
			<div className="container_sections_home w-full">

				<H2 classe="text-center">Les domaines des répétiteurs les plus cherchés</H2>
				<div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-5 md:gap-x-5">
					{
						domains.map(domain => (
							<DomainCard
								key={domain.id}
								image={domain.image}
								discipline={domain.discipline}
								filters={domain.filters}
								onSelectFilter={handleAddFilter}
							/>
						))
					}
					
				</div>

			</div>

			{
				redirectToSearch && <Navigate to="/search/repeaters" />
			}
		</Container>
	);
}

export default RepeaterDomains;