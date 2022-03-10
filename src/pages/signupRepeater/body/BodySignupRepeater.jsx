import React, { useState } from "react";
import H3 from "../../../components/elements/titles/H3";
import Input from "../../../components/elements/inputs/Input";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Radio from "../../../components/elements/inputs/Radio";
import ALink from "../../../components/elements/a/ALink";
import { createUser } from "../../../api/Users";

const BodySignupRepeater = () => {
  let [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    password: "",
    anneeNaissance: "",
    activiteActuelle: "",
    ville: "",
    quartier: "",
    sexe: "",
  });

  const handleChange = (event) => {
    if (formData.anneeNaissance) {
      console.log({date: new Date(formData.anneeNaissance).getTime()})
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      try {
        // Create a user and store his data in the database
        const { data, error } = await createUser({
          firstName: formData.nom,
          lastName: formData.prenom,
          email: formData.email,
          password: formData.password,
          phone: formData.telephone,
          date: new Date(formData.anneeNaissance).getTime(),
          sex: formData.sexe,
          town: formData.ville,
          district: formData.quartier,
          role: 1
        })

        if (data) {
          // store the access token inside the browser
          localStorage.setItem("bteach-token", data.accessToken)
        } else {
          console.log(error)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  const validateForm = () => {
    const {
      nom,
      prenom,
      telephone,
      email,
      password,
      anneeNaissance,
      activiteActuelle,
      ville,
      quartier,
      sexe
    } = formData

    if (
      nom &&
      prenom &&
      telephone &&
      email &&
      password &&
      anneeNaissance &&
      activiteActuelle &&
      ville &&
      quartier &&
      sexe 
    ) {
      return true
    }

    return false
  }

  return (
    <div className="flex flex-col justify-center items-center py-14 px-7 w-11/12 h-full max-w-xl mx-auto font-primary">
      <H3 color="#00171f" classe="mb-10 text-center">
        Suivre les étapes pour s'inscrire en tant repétiteur qui offre des services
        
      </H3>
      <form
        className="shadow-md-x py-5 px-3 sm:px-5 sm:py-7 rounded-xl flex flex-col w-full"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="nom"
          id="nom"
          value={formData.nom}
          placeholder="Nom*"
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="prenom"
          id="prenom"
          value={formData.prenom}
          placeholder="Prenom*"
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="telephone"
          id="telephone"
          value={formData.telephone}
          placeholder="Teléphone*"
          handleChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="E-mail*"
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          placeholder="Mot de passe*"
          handleChange={handleChange}
        />
        <Input
          type="date"
          name="anneeNaissance"
          id="anneeNaissance"
          value={formData.anneeNaissance}
          placeholder="Date de naissance*"
          handleChange={handleChange}
          icone={<BsFillCalendarDateFill />}
        />
        <Input
          type="text"
          name="activiteActuelle"
          id="activiteActuelle"
          value={formData.activiteActuelle}
          placeholder="Activité actuelle*"
          handleChange={handleChange}
        />
        <select
          value={formData.ville}
          name="ville"
          onChange={handleChange}
          className=" bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-600 text-xs md:text-sm w-full focus:outline-none focus:bg-gray2-ligth focus:px-6 focus:text-gray-600 mb-3"
        >
          <option value="">Ville*</option>
          <option value="Yaounde">Yoaunde</option>
          <option value="Douala">Douala</option>
        </select>
        <select
          value={formData.quartier}
          name="quartier"
          onChange={handleChange}
          className=" bg-white border-b-2 border-gray2 py-2 md:py-3 text-gray-600 text-xs md:text-sm w-full focus:outline-none focus:bg-gray2-ligth focus:px-6 focus:text-gray-600 mb-3"
        >
          <option value="">
            Quartier* (choisissez le quartier le plus proche de chez vous)
          </option>
          <option value="Etoudi">Etoudi</option>
          <option value="Damas">Damas</option>
        </select>

        <div className="flex text-gray-400 mb-3">
          <span className="mr-3">Sexe*</span>
          {["homme", "femme"].map((sexe) => (
            <Radio
              key={sexe}
              name="sexe"
              id={sexe}
              value={sexe}
              state={formData.sexe}
              handleChange={handleChange}
            />
          ))}
        </div>
        <button className="self-end flex items-center px-4 py-1.5 mb-2 mt-6 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 sm:px-5">
          <span className="text-sm tracking-wide opacity-90">Terminer</span>
        </button>
      </form>

      <div className="mt-5">
        <span>Vous avez déjà un compte repétiteur ? <ALink link="/sign_in">connectez-vous</ALink></span>
      </div>
    </div>
  );
};

export default BodySignupRepeater;
