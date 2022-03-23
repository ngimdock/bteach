import React from 'react'

const serviceContext = React.createContext({
	services: [],
	addService: (idUser, data) => {},
	addAllServices: (arrayOfServices) => {},
	removeService: (idService) => {}
})

export default serviceContext