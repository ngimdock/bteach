import React, { useState } from "react";
import Checkbox from "../../elements/inputs/Checkbox";
import Input from "../../elements/inputs/Input";
import H3 from "../../elements/titles/H3";
import Paragraphe from "../../elements/p/Paragraphe";
import Button from "../../elements/buttons/Button";
import {
  niveauScolarie,
  matiere,
  typeDeRepétition,
  lieuDeRepetion,
} from "./DumyUpdateServicesModalInfo";

const UpdateServicesModal = ({ stop }) => {
  const [formData, setFormData] = useState({
    coursesLocation: "",
    coursesType: "",
    currentGradeLevel: "",
    description: "",
    minPrice: "",
    levelUnit: [],
    teachingUnit: [],
    categorie: [],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    if (!loading) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <div className="w-screen h-full bg-gray2 fixed z-50">
      <H3
        color="rgb(255, 255, 255)"
        classe="mb-10 text-center mx-auto w-11/12 md:w-8/12"
      >
        Modifie le formulaire pour modile
      </H3>
      <form className="shadow-md-x py-5 px-3 sm:px-5 sm:py-7 rounded-xl flex flex-col w-11/12 text-gray-600 bg-white mx-auto md:w-8/12">
        <Paragraphe classe="text-sm mb-2 font-bold">Filières</Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-sm lg:text-md">
          (il est recommandé de selectionner maximum 3 filières)
        </Paragraphe>
        <div className="md:flex md:gap-4 wrap">
          {matiere.map((matiere) => (
            <Checkbox text={matiere} htmlFor={matiere} />
          ))}
        </div>
        <Paragraphe classe="text-sm mb-2 font-bold">Niveau scolaire</Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-sm lg:text-md">
          (vous pouvez selectionner plusieurs niveaux)
        </Paragraphe>
        <div className="md:flex md:gap-4 wrap">
          {niveauScolarie.map((niveau) => (
            <Checkbox text={niveau} htmlFor={niveau} />
          ))}
        </div>
        <Paragraphe classe="text-sm mb-2 font-bold">
          Type de repétiton
        </Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-sm lg:text-md">
          (vous pouvez selectionner plusieurs type)
        </Paragraphe>
        <div className="md:flex md:gap-4 wrap">
          {typeDeRepétition.map((type) => (
            <Checkbox text={type} htmlFor={type} />
          ))}
        </div>
        <Paragraphe classe="text-sm mb-2 font-bold">
          Lieu de repetition
        </Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-sm lg:text-md">
          (vous pouvez selectionner plusieurs lieux)
        </Paragraphe>
        <div className="md:flex md:gap-4 wrap">
          {lieuDeRepetion.map((lieu) => (
            <Checkbox text={lieu} htmlFor={lieu} />
          ))}
        </div>
        <Input
          type="text"
          name=""
          id=""
          placeholder="Entrez votre salaire minimum par mois(ex: 45000)"
        />
        <Paragraphe classe="text-sm mb-2 font-bold">
          Presentez-vous(minimum 100 caractères)
        </Paragraphe>
        <textarea
          className=" w-full px-3 py-2 md:py-3 text-xs md:text-sm font-normal text-gray-600 bg-white bg-clip-padding  border border-solid border-gray-300 transition ease-in-out m-0 focus:bg-gray2-ligth focus:outline-none
          "
          id=""
          rows="4"
          placeholder="Decrivez vos"
        ></textarea>
        <Button
          onClick={() => {}}
          classe=" self-end flex items-center px-4 py-1.5 mb-2 mt-6 hover:cursor-pointer hover:no-underline bg-primary text-white text-center rounded-full basis-6/12 sm:px-5"
        >
          <span className="text-sm tracking-wide opacity-90">Terminer</span>
        </Button>
        <div className="flex gap-1 md:gap-5">
          <Button
            onClick={stop}
            classe=" self-start flex items-center mb-2 mt-6 hover:cursor-pointer text-white text-center basis-6/12"
            theme="info"
          >
            <span className="tracking-wide opacity-90">Annulé</span>
          </Button>
          <Button
            onClick={() => {}}
            classe=" self-end flex items-center mb-2 mt-6 hover:cursor-pointer text-white text-center basis-6/12"
            theme="info"
          >
            <span className="tracking-wide opacity-90">Terminer</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateServicesModal;
