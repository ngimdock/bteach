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


//Default user Actions

const login = (data) => {
	return{
		type: LOGIN,
		payload: data
	}
}

const logout = () => {
	return{
		type: LOGOUT
	}
}

const updateInfo = (data) => {
	return{
		type: UPDATE_INFO,
		payload: data
	}
}

const updateProfilePic = (picture) => {
	return{
		type: UPDATE_PROFILE_PIC,
		payload: picture
	}
}


const createNote = (data) => {
	return{
		type: CREATE_NOTE,
		payload: data
	}
}

const updateNote = (id, data) => {
	return{
		type: UPDATE_NOTE,
		payload: {
			id,
			data
		}
	}
}

const deleteNote = (idNote) => {
	return{
		type: DELETE_NOTE,
		payload: idNote
	}
}


//Active user actions

const createFeedback = (data) => {
	return{
		type: CREATE_FEEDBACK,
		payload: data
	}
}

const updateFeedback = (id, data) => {
	return{
		type: UPDATE_FEEDBACK,
		payload: {
			id,
			data
		}
	}
}

const deleteFeedback = (idFeedback) => {
	return{
		type: DELETE_FEEDBACK,
		payload: idFeedback
	}
}


//Repeater actions

const createService = (data) => {
	return{
		type: CREATE_SERVICE,
		payload: data
	}
}

const updateService = (id, data) => {
	return{
		type: UPDATE_SERVICE,
		payload: {
			id,
			data
		}
	}
}

const changeServiceVisibility = (info) => {
	return{
		type: CHANGE_SERVICE_VISIBILITY,
		payload: info
	}
}


//Customer actions

const createAnnonce = (data) => {
	return{
		type: CREATE_ANNONCE,
		payload: data
	}
}

const updateAnnonce = (data) => {
	return{
		type: UPDATE_ANNONCE,
		payload: data
	}
}

const changeAnnonceVisibility = (info) => {
	return{
		type: CHANGE_ANNONCE_VISIBILITY,
		payload: info
	}
}


//Administrators actions

const deleteRepeater = (idRepeater) => {
	return{
		type: DELETE_REPEATER,
		payload: idRepeater
	}
}

const certifiedRepeater = (idRepeater) => {
	return{
		type: CERTIFIED_REPEATER,
		payload: idRepeater
	}
}


export {
	login,
	logout,
	updateInfo,
	updateProfilePic,
	createNote,
	updateNote,
	deleteNote,

	createFeedback,
	updateFeedback,
	deleteFeedback,

	createService,
	updateService,
	changeServiceVisibility,

	createAnnonce,
	updateAnnonce,
	changeAnnonceVisibility,

	deleteRepeater,
	certifiedRepeater
}