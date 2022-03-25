import React from 'react'
import Body from './body/BodySignupRepeater'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const SignupRepeater = () => {
	return(
		<div>
			<Seo
				title="Inscription Répétiteur - Bteach"
				description="créer votre compte sur Bteach pour vendre vos compétences de repétiteur"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default SignupRepeater