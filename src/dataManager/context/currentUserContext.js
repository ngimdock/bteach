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
	updateService: (data) => {},
	changeServiceVisibility: (info) => {},

	createAnnonce: (data) => {},
	updateAnnonce: (data) => {},
	changeAnnonceVisibility: (info) => {},

	deleteRepeater: (id) => {},
	certifiedRepeater: (id) => {}
})

export default currentUserContext