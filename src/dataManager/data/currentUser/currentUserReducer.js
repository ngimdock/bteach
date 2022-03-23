import Repeater from "../../../entities/Repeater"
import Customer from "../../../entities/Customer"
import Administrator from "../../../entities/Administrator"
import Service from "../../../entities/Service"

import {
	LOGIN,
	LOGOUT,
	UPDATE_INFO,
	UPDATE_PROFILE_PIC,
	CREATE_NOTE,
	UPDATE_NOTE,
	DELETE_NOTE,

	CREATE_FEEDBACK,
	UPDATE_FEEDBACK,
	DELETE_FEEDBACK,

	CREATE_SERVICE,
	UPDATE_SERVICE,
	CHANGE_SERVICE_VISIBILITY,

	CREATE_ANNONCE,
	UPDATE_ANNONCE,
	CHANGE_ANNONCE_VISIBILITY,

	DELETE_REPEATER,
	CERTIFIED_REPEATER
} from "./type"

const currentUserReducer = (state, action) => {

	switch(action.type){
		case LOGIN: {
			const { role } = action.payload

			console.log({payload: action.payload})

			if(role === 0) {
				const customer = new Customer(action.payload)
				return customer
			}
			else if(role === 1){
				const repeater = new Repeater(action.payload)
				return repeater
			}else{
				const admin = new Administrator(action.payload)
				return admin
			}
		}

		case LOGOUT: {
			return null
		}

		case UPDATE_INFO: {
			if(action.payload){
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.updateInfo(action.payload)
					return customer
				}else if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.updateInfo(action.payload)
					return repeater
				}else{
					const admin = new Administrator(state)
					admin.updateInfo(action.payload)
					return admin
				}
			}

			return state
		}

		case UPDATE_PROFILE_PIC: {
			if(action.payload){
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.setProfilePic(action.payload)
					return customer
				}else if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.setProfilePic(action.payload)
					return repeater
				}else{
					const admin = new Administrator(state)
					admin.setProfilePic(action.payload)
					return admin
				}
			}
			return state
		}

		case CREATE_NOTE: {
			if(action.payload){
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.createNote(action.payload)
					return customer
				}else if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.createNote(action.payload)
					return repeater
				}else{
					const admin = new Administrator(state)
					admin.createNote(action.payload)
					return admin
				}
			}

			return state
		}

		case UPDATE_NOTE: {
			if(action.payload){
				const { id, data } = action.payload
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.updateNote(id, data)
					return customer
				}else if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.updateNote(id, data)
					return repeater
				}else{
					const admin = new Administrator(state)
					admin.updateNote(id, data)
					return admin
				}
			}

			return state
		}

		case DELETE_NOTE: {
			if(action.payload){
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.deleteNote(action.payload)
					return customer
				}else if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.deleteNote(action.payload)
					return repeater
				}else{
					const admin = new Administrator(state)
					admin.deleteNote(action.payload)
					return admin
				}
			}

			return state
		}

		case CREATE_FEEDBACK: {
			if(action.payload){
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.createFeedback(action.payload)
					return customer
				}else if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.createFeedback(action.payload)
					return repeater
				}else{
					return state
				}
			}

			return state
		}

		case UPDATE_FEEDBACK: {
			if(action.payload){
				const { id, data } = action.payload
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.updateFeedback(id, data)
					return customer
				}else if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.updateFeedback(id, data)
					return repeater
				}else{
					return state
				}
			}

			return state
		}

		case DELETE_FEEDBACK: {
			if(action.payload){
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.deleteFeedback(action.payload)
					return customer
				}else if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.deleteFeedback(action.payload)
					return repeater
				}else{
					return state
				}
			}

			return state
		}

		case CREATE_SERVICE: {
			if(action.payload){
				if(state.getRole === 1){
					const repeater = new Repeater(state)
					repeater.createService(action.payload)
					return repeater
				}
			}
			return state
		}

		case UPDATE_SERVICE: {
			if(action.payload){
				if(state.getRole === 1 && state.getService !== null){
					const { data } = action.payload
					const repeater = new Repeater(state)
					repeater.updateService(data)
					return repeater
				}
			}
			return state
		}

		case CHANGE_SERVICE_VISIBILITY: {
			if(action.payload !== undefined){
				if(state.getRole === 1 && state.getService !== null){
					const repeater = new Repeater(state)
					repeater.changeServiceVisibility(action.payload)
					return repeater
				}
			}
			return state
		}

		case CREATE_ANNONCE: {
			if(action.payload){
				if(state.getRole === 0){
					const customer = new Customer(state)
					customer.createAnnonce(action.payload)
					return customer
				}
			}
			return state
		}

		case UPDATE_ANNONCE: {
			if(action.payload){
				if(state.getRole === 0 && state.getAnnonce !== null){
					const customer = new Customer(state)
					customer.updateAnnonce(action.payload)
					console.log(action.payload)
					return customer
				}
			}
			return state
		}

		case CHANGE_ANNONCE_VISIBILITY: {
			if(action.payload !== undefined){
				if(state.getRole === 0 && state.getAnnonce !== null){
					const customer = new Customer(state)
					customer.changeAnnonceVisibility(action.payload)
					return customer
				}
			}
			return state
		}

		case DELETE_REPEATER: {
			//code here
		}

		case CERTIFIED_REPEATER: {
			//code here
		}


		default: return state

	}
}

export default currentUserReducer