import Repeater from "../../../entities/Repeater"
import Customer from "../../../entities/Customer"
import Administrator from "../../../entities/Administrator"

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
		case LOGIN: 
			if(action.payload.id === 0){

			}
	}
}