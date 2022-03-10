import React from 'react'

const currentUserContext  = React.createContext({
	currentUser: null,
	login: (user) => {},
	logout: () => {},
	updateInfo: (data) => {},
	createNote: (data) => {},
	updateNote: (id, data) => {},
	deleteNote: (id) => {}
})

export default currentUserContext