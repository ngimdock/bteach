import React from 'react'
import Body from './body/BodySearchRepeaters'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const SearchRepeaters = () => {
	return(
		<div>
			<Seo
				title="Résultats de recherche des repétiteurs - Bteach"
				description="Résultats de recherche des repétiteurs"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default SearchRepeaters