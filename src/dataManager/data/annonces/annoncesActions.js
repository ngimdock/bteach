import {
	ADD_ANNONCE,
	ADD_ALL_ANNONCES,
	REMOVE_ANNONCE
} from "./types"

const addAnnonce = (annonce) => {
	return {
		type: ADD_ANNONCE,
		payload: annonce
	}
}

const addAllAnnonces = (arrayOfAnnonces) => {
	return {
		type: ADD_ALL_ANNONCES,
		payload: arrayOfAnnonces
	}
}

const removeAnnonce = (idAnnonce) => {
	return {
		type: REMOVE_ANNONCE,
		payload: idAnnonce
	}
}

export {
	addAnnonce,
	addAllAnnonces,
	removeAnnonce
}