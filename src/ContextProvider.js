import React, { useReducer } from 'react'

import currentUserContext from "./dataManager/context/currentUserContext"
import serviceContext from "./dataManager/context/servicesContext"

import currentUserReducer from "./dataManager/data/currentUser/currentUserReducer"
import servicesReducer from "./dataManager/data/services/servicesReducer"


import {
	login,
	logout,
	updateInfo,
	updateProfilePic,
	createNote,
	updateNote,
	deleteNote,

	createFeedback,
	updateFeedback,
	deleteFeedback,

	createService,
	updateService,
	changeServiceVisibility,

	createAnnonce,
	updateAnnonce,
	changeAnnonceVisibility,

	deleteRepeater,
	certifiedRepeater
} from "./dataManager/data/currentUser/currentUserAction"

import {
	addService,
	addAllServices,
	removeService
} from "./dataManager/data/services/servicesActions" 


const ContextProvider = ({ children }) => {

	const [currentUser, dispatchUser] = useReducer(currentUserReducer, null)
	const [services, dispatchServices] = useReducer(servicesReducer, []) 

	//current user dispa
	const userLogin = (data) => {
		dispatchUser(login(data))
	}

	const userLogout = () => {
		dispatchUser(logout())
	}

	const userUpdateInfo = (data) => {
		dispatchUser(updateInfo(data))
	}

	const userUpdateProfilePic = (newImage) => {
		dispatchUser(updateProfilePic(newImage))
	}

	const userCreateNote = (data) => {
		dispatchUser(createNote(data))
	}

	const userUpdateNote = (id, data) => {
		dispatchUser(updateNote(id, data))
	}

	const userDeleteNote = (data) => {
		dispatchUser(deleteNote(data))
	}

	const userCreateFeedback = (data) => {
		dispatchUser(createFeedback(data))
	}

	const userUpdateFeedback = (id, data) => {
		dispatchUser(updateFeedback(id, data))
	}

	const userDeleteFeedback = (id) => {
		dispatchUser(deleteFeedback(id))
	}

	const userCreateService = (data) => {
		dispatchUser(createService(data))
	}

	const userUpdateService = (id, data) => {
		dispatchUser(updateService(id, data))
	}

	const userChangeServiceVisibility = (info) => {
		dispatchUser(changeServiceVisibility(info))
	}

	const userCreateAnnonce = (data) => {
		dispatchUser(createAnnonce(data))
	}

	const userUpdateAnnonce = (id, data) => {
		dispatchUser(updateAnnonce(id, data))
	}

	const userChangeAnnonceVisibility = (info) => {
		dispatchUser(changeAnnonceVisibility(info))
	}

	const userDeleteRepeater = (id) => {
		//code here
		console.log(`suppression du repetiteur numero ${id}`)
	}

	const userCertifiedRepeater = (id) => {
		//code here
		console.log(`certification du repetiteur numero ${id}`)
	}

	//services dispatch actions
	const servicesAddService = (data) => {
		dispatchServices(addService(data))
	}

	const servicesAddAllServices = (arrayOfServices) => {
		dispatchServices(addAllServices(arrayOfServices))
	}

	const servicesRemoveService = (idService) => {
		dispatchServices(removeService(idService))
	}

	const currentUserContextValue ={
		currentUser,
		login: userLogin,
		logout: userLogout,
		updateInfo: userUpdateInfo,
		updateProfilePic: userUpdateProfilePic,
		createNote: userCreateNote,
		updateNote: userUpdateNote,
		deleteNote: userDeleteNote,

		createFeedback: userCreateFeedback,
		updateFeedback: userUpdateFeedback,
		deleteFeedback: userDeleteFeedback,

		createService: userCreateService,
		updateService: userUpdateService,
		changeServiceVisibility: userChangeServiceVisibility,

		createAnnonce: userCreateAnnonce,
		updateAnnonce: userUpdateAnnonce,
		changeAnnonceVisibility: userChangeAnnonceVisibility,
		deleteRepeater: userDeleteRepeater,
		certifiedRepeater: userCertifiedRepeater
	}

	const servicesContextValue = {
		services,
		addService: servicesAddService,
		addAllServices: servicesAddAllServices,
		removeService: servicesRemoveService
	}

	return (
		<currentUserContext.Provider value={currentUserContextValue} >
			<serviceContext.Provider value={servicesContextValue}>
				{ children }
			</serviceContext.Provider>
		</currentUserContext.Provider >
	)
}

export default ContextProvider