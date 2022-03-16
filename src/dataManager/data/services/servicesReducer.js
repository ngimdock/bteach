import Repeater from "../../../entities/Repeater"
import Customer from "../../../entities/Customer"
import Administrator from "../../../entities/Administrator"
import Service from "../../../entities/Service"

import { 
	ADD_SERVICE, 
	ADD_ALL_SERVICES, 
	REMOVE_SERVICE,
	UPDATE_SERVICE
} from "./types"

import{
	addService,
	addAllServices,
	removeService
} from "./servicesActions"

const servicesReducer = (state=[], action) => {
	switch(action.type){
		case ADD_SERVICE: {
			const services = [...state]

			if(action.payload){
				services.push(new Service(action.payload))
				return services
			}
			return state
		}

		case ADD_ALL_SERVICES: { //fetch all services from database
			if(action.payload){
				let services = []
				for(let serv of action.payload){
					services.push(new Service(serv))
				}

				return services
			}
			return state
		}

		case REMOVE_SERVICE: {
			const services = [...state]

			if(action.payload){
				const index = services.findIndex(service => service.getId === action.payload)
				if(index > -1){
					services.splice(index, 1)
				}
				return services
			}
			return state
		}

		default: return state
	}
}

export default servicesReducer