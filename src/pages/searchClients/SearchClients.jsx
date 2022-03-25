import React from 'react'
import Body from './body/BodySearchClients'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const SearchClients = () => {
	return(
		<div>
			<Seo
				title="Résultats de recherche - Bteach"
				description="Résultats de recherche des clients"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default SearchClients