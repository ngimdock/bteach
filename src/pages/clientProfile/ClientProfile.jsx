import React, { useContext } from 'react'
import Body from './body/BodyClientProfile'
import Seo from '../../components/utils/seo/Seo'
import BaseSecured from '../BaseSecured'
import currentUserContext from '../../dataManager/context/currentUserContext'
import { Navigate } from 'react-router-dom'

const ClientProfile = ({ studenName }) => {
	const { currentUser } = useContext(currentUserContext)

	return(
		<div>
			{
				currentUser ? (
					<>
						<Seo
							title={ `Profil de ${currentUser.getFullName} - Bteach` }
							description={ `Si vous avez le profile de ${studenName} n'hesitez pas à la contacter pour en savoir plus sur l'offre` }
						/>
						<BaseSecured>
							<Body />
						</BaseSecured>
					</>
				): <Navigate to="/" />
			}
		</div>
	)
}

export default ClientProfile