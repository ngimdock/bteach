import React from 'react'

const currentUserContext  = React.createContext({
	currentUser: null,
	login: (user) => {},
	logout: () => {},
	updateInfo: (data) => {},
	updateProfilePic: (newImage) => {},
	createNote: (data) => {},
	updateNote: (id, data) => {},
	deleteNote: (id) => {},

	createFeedback: (data) => {},
	updateFeedback: (id, data) => {},
	deleteFeedback: (id) => {},

	createService: (data) => {},
	updateService: (id, data) => {},
	changeServiceVisibility: (info) => {},

	createAnnonce: (data) => {},
	updateAnnonce: (id, data) => {},
	changeAnnonceVisibility: (info) => {}
})

export default currentUserContext