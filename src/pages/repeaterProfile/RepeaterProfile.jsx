import React, { useContext } from 'react'
import Body from './body/BodyRepeaterProfile'
import Seo from '../../components/utils/seo/Seo'
import Base from '../Base'
import { useLocation } from 'react-router-dom'
import serviceContext from '../../dataManager/context/servicesContext'


const RepeaterProfile = ({ repeaterName }) => {
	// Get data from URL
	const location = useLocation()
	const locationSplit = location.pathname.split("/")
	const serviceId = locationSplit[locationSplit.length - 1] 

	// Get data from global state
	const { services } = useContext(serviceContext)

	const getService = (services, serviceId, setServiceExist = (val) => {}) => {
		const service = services.find(serv => {
			return serv.getId === serviceId
		})
	
		if (service) {
			setServiceExist(true)
		}
	
		return service
	}

	return(
		<div>
			<Seo
				title={ `Répétiteur ${getService(services, serviceId).getOwner.getName} - Bteach` }
				description="Vous voulez vendre vos compétences en tant que repétiteur ou vous avez besoin d'un repétiteur qualifié en mathématique, physique, chimie, anglais et autre ? Bteach est la meilleur solution de repétition au cameroun"
			/>
			<Base>
				<Body />
			</Base>
		</div>
	)
}

export default RepeaterProfile