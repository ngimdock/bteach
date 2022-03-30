import { 
	ADD_SERVICE, 
	ADD_ALL_SERVICES, 
	REMOVE_SERVICE, 
	UPDATE_SERVICE,

    CREATE_NOTE_SERVICE,
    UPDATE_NOTE_SERVICE,
    DELETE_NOTE_SERVICE,
    STORE_ALL_NOTES_SERVICE
} from "./types"

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

//notes actions
const createNoteService = (idService, idSender, data) => {
	return {
		type: CREATE_NOTE_SERVICE,
		payload: {
			idService,
			idSender,
			data
		}
	}
}

const updateNoteService = (idService, idNote, data) => {
	return {
		type: UPDATE_NOTE_SERVICE,
		payload: {
			idService,
			idNote,
			data
		}
	}
}

const deleteNoteService = (idService, idNote) => {
	return {
		type: DELETE_NOTE_SERVICE,
		payload: {
			idService,
			idNote
		}
	}
}

const storeAllNotesService = (idService, notes) => {
	return {
		type: STORE_ALL_NOTES_SERVICE,
		payload: {
			idService,
			notes
		}
	}
}

export {
	addService,
	addAllServices,
	removeService,

	createNoteService,
	updateNoteService,
	deleteNoteService,
	storeAllNotesService
}