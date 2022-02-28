import React from 'react'
import Body from './body/BodyClientProfile'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const ClientProfile = ({ studenName }) => {
	return(
		<div>
			<Seo
				title={ `${studenName} recherche un repétiteur` }
				description={ `Si vous avez le profile de ${studenName} n'hesitez pas à la contacter pour en savoir plus sur l'offre` }
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default ClientProfile