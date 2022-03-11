import React, { useReducer } from 'react'

import currentUserContext from "./dataManager/context/currentUserContext"
import currentUserReducer from "./dataManager/data/currentUser/currentUserReducer"

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


const ContextProvider = ({ children }) => {

	const [currentUser, dispatchUser] = useReducer(currentUserReducer, null)

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

	return (
		<currentUserContext.Provider value={currentUserContextValue} >
			{ children }
		</currentUserContext.Provider >
	)
}

export default ContextProvider