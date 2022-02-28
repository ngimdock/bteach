import React from 'react'
import Body from './body/BodySignupClient'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const SignupClient = () => {
	return(
		<div>
			<Seo
				title="Bteach/inscription/client"
				description="créer votre compte sur Bteach pour trouver un repétiteur qualifié"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default SignupClient