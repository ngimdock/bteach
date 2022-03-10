import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import H3 from "../../../components/elements/titles/H3";
import Input from "../../../components/elements/inputs/Input";
import style from '../../../css/base.module.css'
import Button from "../../../components/elements/buttons/Button";

const BodySignin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center py-14 px-7 w-11/12 h-full max-w-md mx-auto font-primary">
      <H3 color="#00171f" classe="mb-10">
        Connexion
      </H3>
      <form className="flex flex-col shadow-md-x py-5 px-3  sm:px-5 sm:py-7  rounded-xl w-full">
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="email"
          handleChange={setEmail}
        />
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Mot de passe"
          handleChange={setPassword}
        />
        <button className="px-4 py-1.5 mt-7 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 self-end  sm:px-8">
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
