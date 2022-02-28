import React from 'react'
import Body from './body/BodyError404'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const Error404 = () => {
	return(
		<div>
			<Seo
				title="Page non trouvé"
				description="Desolé, la page à laquelle vou vouez acceder n’existe pas ou à été retiré. Nous pouvez retourner à la page d’accueil"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default Error404