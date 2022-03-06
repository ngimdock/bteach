import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import H1 from "../../../components/elements/titles/H1";

const BodySignin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div style={{height: "100vh"}} className="flex flex-col justify-center items-center py-10 px-7 w-11/12 h-full max-w-md mx-auto font-primary">
      <H1 size="big" color="#00171f" classe="">
        Connexion
      </H1>
      <form className="flex flex-col shadow-lg py-5 px-3 sm:px-5 sm:py-7  rounded-xl w-full">
        <input
          className="border-0 border-b-2 focus:outline-none mb-5 pl-3 pb-1.5 pt-1.5 focus:border-primary"
          style={{transition: "border-bottom .4s ease"}}
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-0 border-b-2 focus:outline-none mb-4 pl-3 pb-1.5 pt-1.5 focus:border-primary"
          style={{transition: "border-bottom .4s ease"}}
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="px-4 py-1.5 mt-7 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 self-end  sm:px-8">
          Connexion
        </button>
      </form>
    </div>
  );
};

export default BodySignin;
