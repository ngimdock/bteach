import Service from "../../../entities/Service"

import { 
	ADD_SERVICE, 
	ADD_ALL_SERVICES, 
	REMOVE_SERVICE,

	CREATE_NOTE_SERVICE,
    UPDATE_NOTE_SERVICE,
    DELETE_NOTE_SERVICE,
    STORE_ALL_NOTES_SERVICE
} from "./types"

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

		case CREATE_NOTE_SERVICE: {
			const { idService, data } = action.payload
			const services = [...state]
			const index = findServiceIndex(services, idService) //find the index of service to create a note

			if(index > -1){
				services[index].createNote(data)
				console.log("note was created")
				console.log(services)
				return services
			}
			
			return state
		}

		case STORE_ALL_NOTES_SERVICE : {
			const { idService, notes } = action.payload
			const services = [...state]
			const index = findServiceIndex(services, idService) //find the index of service to create a note

			if(index > -1){
				services[index].storeAllNotes(notes)
				return services
			}
			return state
		}

		default: return state
	}
}

function findServiceIndex(services, idService){
	const index = services.findIndex(function(serv){
		return serv.id === idService
	})

	return index
}

export default servicesReducer