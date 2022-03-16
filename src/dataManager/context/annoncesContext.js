import React from 'react'

const annonceContext = React.createContext({
	annonce: [],
	addAnnonce: (data) => {},
	addAllAnnonce: (arrayOfAnnonce) => {},
	removeAnnonce: (idAnnonce) => {}
})

export default annonceContext