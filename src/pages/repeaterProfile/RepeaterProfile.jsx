import React, { useContext, useEffect, useState } from 'react'
import Body from './body/BodyRepeaterProfile'
import Seo from '../../components/utils/seo/Seo'
import Base from '../Base'
import { Navigate, useLocation } from 'react-router-dom'
import serviceContext from '../../dataManager/context/servicesContext'
import currentUserContext from '../../dataManager/context/currentUserContext'


const RepeaterProfile = ({ repeaterName }) => {
	// Get data from URL
	const location = useLocation()
	const locationSplit = location.pathname.split("/")
	const serviceId = locationSplit[locationSplit.length - 1] 

	// Get data from global state
	const { services } = useContext(serviceContext)
	const { currentUser } = useContext(currentUserContext)

	// Set local state
	const [owner, setOwner] = useState(null)
	const [redirect, setRedirect] = useState(false)

	/**
	 * Check if the user is the current user
	 * @param {User} user 
	 * @param {String} serviceId 
	 * @returns 
	 */
	const isCurrentUser = (user, serviceId) => {
		if (user && user.getRole === 1) {
			if (user.getService.getId === serviceId) {
				return true
			}
		}

		return false
	}

	const getService = (services, serviceId, setServiceExist = (val) => {}) => {
		const service = services.find(serv => {
			return serv.getId === serviceId
		})
	
		if (service) {
			setServiceExist(true)
		}
	
		return service
	}

	useEffect(() => {
		const service = getService(services, serviceId)

		if (isCurrentUser(currentUser, serviceId)) {
			setOwner(currentUser)
		} else {
			if (service) {
				setOwner(service.getOwner)
			}

			setRedirect(true)
		}

	}, [services, serviceId, currentUser])


	return(
		<div>
			{
				owner ? (
					<>
						<Seo
							title={ `Répétiteur ${owner.getName} - Bteach` }
							description="Vous voulez vendre vos compétences en tant que repétiteur ou vous avez besoin d'un repétiteur qualifié en mathématique, physique, chimie, anglais et autre ? Bteach est la meilleur solution de repétition au cameroun"
						/>
						<Base>
							<Body />
						</Base>
					</>
				) : (
					redirect && <Navigate to="/" />
				)
			}
		</div>
	)
}

export default RepeaterProfile