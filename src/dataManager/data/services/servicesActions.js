import { ADD_SERVICE, ADD_ALL_SERVICES, REMOVE_SERVICE, UPDATE_SERVICE } from "./types"

const addService = (data) => {
	return {
		type: ADD_SERVICE,
		payload: data
	}
}

const addAllServices = (arrayOfService) => {
	return {
		type: ADD_ALL_SERVICES,
		payload: arrayOfService
	}
}

const removeService = (idService) => {
	return {
		type: REMOVE_SERVICE,
		payload: idService
	}
}


export {
	addService,
	addAllServices,
	removeService
}