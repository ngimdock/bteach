import Repeater from "../../../entities/Repeater"
import Customer from "../../../entities/Customer"
import Administrator from "../../../entities/Administrator"
import Service from "../../../entities/Service"

import { 
	ADD_SERVICE, 
	ADD_ALL_SERVICES, 
	REMOVE_SERVICE
} from "./types"

import{
	addService,
	addAllServices,
	removeService
} from "./servicesActions"

const servicesReducer = (state=[], action) => {
	switch(action.type){
		case ADD_SERVICE : {
			console.log("ajout de service")
			return state
		}

		case ADD_ALL_SERVICES : {
			console.log("ajout de tous les services")
			return state
		}

		case REMOVE_SERVICE : {
			console.log("suppression de service")
			return state
		}

		default: return state
	}
}

export default servicesReducer