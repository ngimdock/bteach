import {
	ADD_ANNONCE,
	ADD_ALL_ANNONCES,
	REMOVE_ANNONCE
} from "./types"


const annonceReducer = (state=[], action) => {
	switch(action.typs){
		case ADD_ANNONCE: {
			console.log("ajout de l'annonce")
		}
		default: return state
	}
}