import React from 'react'

const serviceContext = React.createContext({
	services: [],
	addService: (idUser, data) => {},
	addAllServices: (arrayOfServices) => {},
	removeService: (idService) => {},

	//these method make actions for spécific service
	createNoteService: (idService, data) => {},
	updateNoteService: (idService, idNote, data) => {},
	deleteNoteService: (idService, idNote) => {},
	storeAllNotesService: (idService, notes) => {}
})

export default serviceContext