import React from 'react'
import Body from './body/BodyTeam'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const Team = () => {
	return(
		<div>
			<Seo
				title="Developpers - Bteach"
				description="Equipe de développeurs Bteach"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default Team