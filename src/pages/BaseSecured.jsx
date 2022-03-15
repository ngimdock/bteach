import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import currentUserContext from "../dataManager/context/currentUserContext"
import Base from "./Base"

const BaseSecured = ({ children }) => {
  // Set local state
  const [redirectToHome, setRedirectToHome] = useState(false)

  // Get global state
  const { currentUser } = useContext(currentUserContext)

  return (
    <Base>
      {
        currentUser ? (
          children 
        ):(
          <Navigate to="/" />
        )
      }
    </Base>
  )
}

export default BaseSecured