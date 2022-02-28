import React from 'react'
import Body from './body/BodyHome'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const Home = () => {
	return(
		<div>
			<Seo
				title="Bteact/accueil"
				description="Vous voullez vendre vos compétences en tant que repétiteur ou vous avez besoin d'un repétiteur qualifié en mathématique, physique, chimie, anglais et autre ? Bteach est la meilleur solution de repétition au cameroun"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default Home