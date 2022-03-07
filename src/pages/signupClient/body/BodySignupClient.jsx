import React, { useState } from "react";
import H3 from "../../../components/elements/titles/H3";
import Input from "../../../components/elements/inputs/Input";
import { FaChevronRight } from "react-icons/fa";

const BodySignupClient = () => {
  let [email, setEmail] = useState("");
  let [prenom, setPrenom] = useState("");
  let [nom, setNom] = useState("");
  let [password, setPassword] = useState("");
  let [telephone1, setTelephone1] = useState("");
  let [telephone2, setTelephone2] = useState("");
  let [quartier, setQuartier] = useState("");
  let [ville, setVille] = useState("");
  let [profilePicture, setProfilePicture] = useState("");
  let [sexe, setSexe] = useState("");

  return (
    <div className="flex flex-col justify-center items-center py-14 px-7 w-11/12 h-full max-w-xl mx-auto font-primary">
      <H3 color="#00171f" classe="mb-10 text-center">
        Suivre les étapes pour s'inscrire en tant apprenant qui cherche un
        repétiteur
      </H3>
      <div className="flex justify-between text-white w-full items-center">
        <p className="rounded-full bg-primary font-bold basis-1/12 px-4 py-2 text-center xs:py-4 xs:px-6">
          1
        </p>
        <p className=" bg-gray-400 h-1 basis-5/6 opacity-10"></p>
        <p className="rounded-full bg-gray-400 font-bold basis-1/12 text-white opacity-10 px-4 py-2 text-center xs:py-4 xs:px-6">
          2
        </p>
      </div>
      <div className="flex justify-between m-0 w-full text-gray-400 mt-1 text-xs">
        <p className="w-2/12 text-left">Informations personnelles</p>
        <p className="w-2/12 max-w-min text-right">Offre de repétition</p>
      </div>
      <form
        className="flex flex-col shadow-md-x py-5 px-3 mt-10 sm:px-5 sm:py-7 rounded-xl w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="text"
          name="nom"
          id="nom"
          value={nom}
          placeholder="Nom"
          handleChange={setNom}
        />
        <Input
          type="text"
          name="prenom"
          id="prenom"
          value={prenom}
          placeholder="Prenom"
          handleChange={setPrenom}
        />
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="E-mail"
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
        <Input
          type="text"
          name="telephone1"
          id="telephone1"
          value={telephone1}
          placeholder="Teléphone 1"
          handleChange={setTelephone1}
        />
        <Input
          type="text"
          name="telephone2"
          id="telephone2"
          value={telephone2}
          placeholder="Teléphone 2"
          handleChange={setTelephone2}
        />
        <select
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          className=" bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-600 text-xs md:text-sm  focus:outline-none focus:bg-gray2-ligth focus:px-6 focus:text-gray-600 mb-3"
        >
          <option value="">Ville</option>
          <option value="Yaounde">Yoaunde</option>
          <option value="Douala">Douala</option>
        </select>
        <Input
          type="text"
          name="quartier"
          id="quartier"
          value={quartier}
          placeholder="Quartier"
          handleChange={setQuartier}
        />
        <label
          htmlFor="profilePicture"
          className="bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-400 text-xs md:text-sm  focus:outline-none focus:bg-gray2-ligth focus:px-6 mb-3"
        >
          Entrez votre photo de profile
        </label>
        <input
          className="hidden"
          type="file"
          name="profilePicture"
          id="profilePicture"
          value={profilePicture}
          placeholder="Entrez votre photo de profil"
          onChange={(e) => e.target.value}
          accept=".jpg, .jpeg, .png"
        />
        <div className="flex text-gray-400 mb-3">
          <span className="mr-3">Sexe</span>
          {["homme", "femme"].map((color) => (
            <div className="mr-3">
              <input
                className="after:mr-2"
                // style={sexe === color ? { color: "rgb(75 85 99)" } : ""}
                type="radio"
                name="sexe"
                id={color}
                value={color}
                checked={sexe === color}
                onChange={(e) => setSexe(e.target.value)}
              />
              <label htmlFor={color} className="pl-2 capitalize">
                {color}
              </label>
            </div>
          ))}
        </div>
        <button className="px-4 py-1.5 my-2 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 self-end sm:px-5 flex items-center">
          <span className="text-sm tracking-wide opacity-90">suivant</span>
          <FaChevronRight className="text-white font-bold ml-2" />
        </button>
      </form>
    </div>
  );
};

export default BodySignupClient;
