import React, { useState } from "react";
import H3 from "../../../components/elements/titles/H3";
import Input from "../../../components/elements/inputs/Input";
import Checkbox from "../../../components/elements/inputs/Checkbox";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

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
  let [anneeAcademique, setAnneeAcademique] = useState("");
  let [isStep2Active, setIsStep2Active] = useState(false);

  let formStep1 = () => {
    return (
      <div className="flex flex-col w-full">
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
          className=" bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-600 text-xs md:text-sm w-full focus:outline-none focus:bg-gray2-ligth focus:px-6 focus:text-gray-600 mb-3"
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
          className="bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-400 text-xs md:text-sm  focus:outline-none focus:bg-gray2-ligth focus:px-6 mb-3 w-full block"
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
                key={color}
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
        <button
          className=" 
          self-end
          flex 
          items-center 
          px-4 py-1.5 
          mb-2 mt-6 
          hover:cursor-pointer 
          hover:no-underline 
          bg-primary 
          text-white 
          text-center 
          rounded-full 
          basis-6/12 
          sm:px-5"
          onClick={() => setIsStep2Active(!isStep2Active)}
        >
          <span className="text-sm tracking-wide opacity-90">suivant</span>
          <FaChevronRight className="text-white font-bold ml-2" />
        </button>
      </div>
    );
  };

  const formStep2 = () => (
    <div
      className="flex flex-col w-full text-gray-400 font-primary"
      style={isStep2Active ? { display: "flex" } : { display: "none" }}
    >
      <p className="font-bold mt-1 tracking-wide">Filières</p>
      <p className="text-xs md:text-sm">
        (selectionnez les filières pour se faire repéter)
      </p>
      <div className="flex flex-wrap mt-3">
        {[
          "Mathématique",
          "Physique",
          "Chimie",
          "Informatique",
          "SVT",
          "Anglais",
          "Français",
          "Allemand",
          "Espagnol",
          "Arabe",
          "Philosophie",
          "Histoire-géographie",
          "Sport",
          "Dance",
          "Entrepreunariat",
          "Marketing",
          "Economie",
          "Politique",
        ].map((matiere) => (
          <Checkbox text={matiere} htmlFor={matiere} key={matiere} />
        ))}
      </div>
      <p className="mt-5">
        <span className="font-bold">Niveau scolaire</span>
        <span className="text-xs md:text-sm">
          (Entrez votre niveau Respectant un des exemples)
        </span>
      </p>
      <p className="text-xs md:text-sm mb-3">
        (Ex: cm1 | première C | troisème | niveau 1 physique)
      </p>
      <Input
        classe="md:text-sm"
        type="text"
        placeholder="Entrez le niveau académique"
        id="anneeAcademique"
        name="anneeAcademique"
        value={anneeAcademique}
        handleChange={setAnneeAcademique}
      />
      <p className="font-bold mt-4">
        Présentation de votre recherche de repétition
      </p>
      <p className="mt-1 text-xs md:text-sm">
        (Dècrivez mieux votre recherche de repétiteur)
      </p>
      <textarea
        className="my-5 w-full border text-xs border-gray-400 tracking-wider block focus:outline-none p-2 focus:text-gray-600 focus:bg-gray2-ligth md:text-sm"
        rows="8"
        placeholder="Je suis gaelle kengne, éleève de première C en physique je chereche un repétiteur en physique pour mieux comprendre les notions enseignés en cours afin de passer mon probatoire avec une bonne mention. Je uis trés travailleuse et je progresse rapidement, vous pouvez contez sur moi pour respecter votre professionalisme et effectuer les exercices que vous allez me donner. N'hesitez pas à me contacter pour de detail.."
      ></textarea>
      <div className="flex justify-between w-full mt-8 mb-2">
        <button
          className="px-4 py-1.5  hover:cursor-pointer bg-primary text-white text-center text-xs md:text-sm rounded-full basis-3/12 self-start sm:px-5 flex items-center"
          onClick={() => setIsStep2Active(!isStep2Active)}
        >
          <FaChevronLeft className="text-white font-bold mr-2" />
          <span className="tracking-wide opacity-90">Precédent</span>
        </button>
        <button className="px-4 py-1.5 hover:cursor-pointer bg-primary text-white text-center text-xs md:text-sm rounded-full basis-3/12 self-end sm:px-5">
          <span className="tracking-wide opacity-90 mx-auto">Terminer</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center py-14 px-7 w-11/12 h-full max-w-xl mx-auto font-primary">
      <H3 color="#00171f" classe="mb-10 text-center">
        {isStep2Active
          ? "Terminer les étapes pour s'inscrire en tant que apprenant qui cherche un repétiteur"
          : "Suivre les étapes pour s'inscrire en tant apprenant qui cherche un repétiteur"}
      </H3>
      <div className="flex justify-between text-white w-full items-center">
        <p className="rounded-full bg-primary font-bold basis-1/12 px-4 py-2 text-center xs:py-4 xs:px-6">
          1
        </p>
        <p
          className=" bg-gray-400 h-1 basis-5/6 opacity-10"
          style={
            isStep2Active
              ? {
                  opacity: "1",
                  backgroundColor: "rgb(0 168 232 / var(--tw-bg-opacity)",
                }
              : null
          }
        ></p>
        <p
          className="rounded-full bg-gray-400 font-bold basis-1/12 text-white opacity-10 px-4 py-2 text-center xs:py-4 xs:px-6"
          style={
            isStep2Active
              ? {
                  opacity: "1",
                  backgroundColor: "rgb(0 168 232 / var(--tw-bg-opacity)",
                }
              : null
          }
        >
          2
        </p>
      </div>
      <div className="flex justify-between m-0 w-full text-gray-400 mt-1 text-xs">
        <p className="w-2/12 text-left">Informations personnelles</p>
        <p className="w-2/12 max-w-min text-right">Offre de repétition</p>
      </div>
      <form
        className="shadow-md-x py-5 px-3 mt-10 sm:px-5 sm:py-7 rounded-xl w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        {formStep1()}
        {formStep2()}
      </form>
    </div>
  );
};

export default BodySignupClient;
