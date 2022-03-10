import React, { useReducer } from 'react'

import currentUserContext from "./dataManager/context/currentUserContext"




const ContextProvider = ({ children }) => {

	const currentUserContextValue ={

	}

	return (
		<currentUserContext.Provider value={currentUserContextValue} >
			{ children }
		</currentUserContext.Provider >
	)
}

export default ContextProvider