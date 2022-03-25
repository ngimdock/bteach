import React from 'react'
import Body from './body/BodySignin'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const Signin = () => {
	return(
		<div>
			<Seo
				title="Connexion - Bteach"
				description="Connectez vous sur Bteach pour vendre vos compétences en tant que repétiteur ou pour trouver un repétiteur qualifié"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default Signin