import React, { useContext } from 'react'
import Body from './body/BodyRepeaterProfile'
import Seo from '../../components/utils/seo/Seo'
import currentUserContext from '../../dataManager/context/currentUserContext'
import Base from '../Base'


const RepeaterProfile = ({ repeaterName }) => {
	const { currentUser } = useContext(currentUserContext)

	return(
		<div>
			<Seo
				title={ `${repeaterName} est en repétiteur un repétiteur` }
				description="Vous voullez vendre vos compétences en tant que repétiteur ou vous avez besoin d'un repétiteur qualifié en mathématique, physique, chimie, anglais et autre ? Bteach est la meilleur solution de repétition au cameroun"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default RepeaterProfile