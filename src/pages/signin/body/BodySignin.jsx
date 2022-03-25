import React, { useState, useContext } from "react";
import H3 from "../../../components/elements/titles/H3";
import Input from "../../../components/elements/inputs/Input";
import Button from "../../../components/elements/buttons/Button";
import { firebaseUserLogin } from "../../../api/Users";
import { Navigate } from 'react-router-dom'
import LoadingCircle from "../../../components/utils/loaders/LoaderCircle"
import { ToastContext } from 'react-simple-toastify'

const BodySignin = () => {
  // Set local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHome, setRedirectHome] = useState(false)
  const [loading, setLoading] = useState(false)

  // Get global state
  const { displayToast } = useContext(ToastContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm() && !loading) {
      setLoading(true)

      try {
        // Try to connect the user in firebase
        const { data, error } = await firebaseUserLogin(email, password)

        if (data) {
          setRedirectHome(true)
        } else {
          console.log(error)
        }
      } catch (err) {
        console.log(err)

        displayToast("Soit votre adresse email soit votre mot de passe est incorrect")
      } finally {
        setLoading(false)
      }
    }
  }

  const handleChange = (e) => {
    if (!loading) {
      const {
        name,
        value
      } = e.target

      if (name === "email") {
        setEmail(value)
      } else if (name === "password") {
        setPassword(value)
      }
    }
  }

  const validateForm = () => {
    if (email && password) {
      return true
    }

    return false
  }

  return (
    <div style={{ opacity: loading ? .4:1 }} className="flex flex-col justify-center items-center py-14 px-7 w-11/12 h-full max-w-md mx-auto font-primary">
      {
        redirectHome && <Navigate to="/" />
      }

      {
        loading && <LoadingCircle size="large" />
      }
      
      
      <H3 color="#00171f" classe="mb-10">
        Connexion
      </H3>
      <form 
        className="flex flex-col shadow-md-x py-5 px-3  sm:px-5 sm:py-7  rounded-xl w-full"
      >
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="email"
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Mot de passe"
          handleChange={handleChange}
        />
        <button onClick={handleSubmit} className="px-4 py-1.5 mt-7 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 self-end  sm:px-8">
          Connexion
        </button>
      </form>

      <div className="mt-5">
        <span>Vous n'avez pas encore de compte. inscrivez vous en tant que</span><br />

        <div className="mt-5">
          <Button 
            link="/client/sign_up"
            size="small"
            style={{ backgroundColor: "#e00045" }}
          >
            Client
          </Button>
          <Button 
            link="/repeater/sign_up"
            size="small"
            style={{ backgroundColor: "#e00045" }}
            classe="ml-2"
          >
            Repetiteur
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BodySignin;
