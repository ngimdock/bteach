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
  categories,
} from "./DumyUpdateServicesModalInfo";

const UpdateServicesModal = ({ stop }) => {
  const [formData, setFormData] = useState({
    categories: [],
    coursesLocation: [],
    coursesType: [],
    currentGradeLevel: "",
    description: "",
    minPrice: "",
    levelsUnit: [],
    teachingUnit: [],
    isVisible: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    if (!loading) {
      if (event.target.type === "checkbox") {
        if (isChecked) {
          switch (event.target.name) {
            case "categories":
              console.log("State before removal ", formData);
              setFormData({
                ...formData,
                categories: [...formData.categories, event.target.value],
              });
              break;
            case "coursesLocation":
              console.log("State before removal ", formData);
              setFormData({
                ...formData,
                coursesLocation: [
                  ...formData.coursesLocation,
                  event.target.value,
                ],
              });
              break;
            case "coursesType":
              console.log("State before removal ", formData);
              setFormData({
                ...formData,
                [event.target.name]: [
                  ...formData.coursesType,
                  event.target.value,
                ],
              });
              break;
            case "levelsUnit":
              console.log("State before removal ", formData);
              setFormData({
                ...formData,
                [event.target.name]: [
                  ...formData.levelsUnit,
                  event.target.value,
                ],
              });
              break;
            case "teachingUnit":
              console.log("State before removal ", formData);
              setFormData({
                ...formData,
                [event.target.name]: [
                  ...formData.teachingUnit,
                  event.target.value,
                ],
              });
              break;
            default:
              return formData;
          }
        } else {
          switch (event.target.name) {
            case "categories":
              console.log("State before removal ", formData);
              const index = formData.categories.indexOf(event.target.name);
              setFormData({
                ...formData,
                categories: formData.categories.splice(index, 1),
              });
              break;
            case "coursesLocation":
              console.log("State before removal ", formData);
              const indexCoursesLocation = formData.coursesLocation.indexOf(
                event.target.name
              );
              setFormData({
                ...formData,
                categories: formData.coursesLocation.splice(
                  indexCoursesLocation,
                  1
                ),
              });
              break;
            case "coursesType":
              console.log("State before removal ", formData);
              const indexCoursesType = formData.coursesType.indexOf(
                event.target.name
              );
              setFormData({
                ...formData,
                categories: formData.coursesType.splice(indexCoursesType, 1),
              });
              break;
            case "levelsUnit":
              console.log("State before removal ", formData);
              const indexLevelsUnit = formData.coursesType.indexOf(
                event.target.name
              );
              setFormData({
                ...formData,
                [event.target.name]: formData.levelsUnit.splice(
                  indexLevelsUnit,
                  1
                ),
              });
              break;
            case "teachingUnit":
              console.log("State before removal ", formData);
              const indexTeachingUnit = formData.coursesType.indexOf(
                event.target.name
              );
              setFormData({
                ...formData,
                [event.target.name]: formData.levelsUnit.splice(
                  indexTeachingUnit,
                  1
                ),
              });
              break;
            default:
              return formData;
          }
        }
      } else {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    }
  };
  console.log("State after modification of state", formData);

  const { minPrice, description, currentGradeLevel } = formData;
  return (
    <div className="w-screen h-full bg-white fixed z-50 py-8 overflow-y-scroll">
      <H3
        color="rgb(255, 255, 255)"
        classe="mb-10 text-center mx-auto w-11/12 max-w-xl"
      >
        Ci-Dessus est le formulaire pour modifie les informations sur votre
        services
      </H3>
      <form className="shadow-md-x py-5 px-3 sm:px-5 sm:py-7 rounded-xl flex flex-col w-11/12 max-w-xl text-gray-600 bg-white mx-auto">
        <Paragraphe classe="text-sm mb-0 font-bold">Filières</Paragraphe>
        <Paragraphe classe="text-xs mb-2 mt-0 md:text-xs">
          (il est recommandé de selectionner maximum 3 filières)
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {matiere.map((matiere) => (
            <Checkbox
              text={matiere}
              htmlFor={matiere}
              name="teachingUnit"
              handleChange={handleChange}
            />
          ))}
        </div>
        <Paragraphe classe="text-sm mt-3 md:mt-5 font-bold">
          Niveau scolaire
        </Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-xs">
          (vous pouvez selectionner plusieurs niveaux)
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {niveauScolarie.map((niveau) => (
            <Checkbox
              text={niveau}
              htmlFor={niveau}
              name="levelsUnit"
              handleChange={handleChange}
            />
          ))}
        </div>
        <Paragraphe classe="text-sm mt-3 md:mt-5 font-bold">
          Type de repétiton
        </Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-xs">
          (vous pouvez selectionner plusieurs type)
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {typeDeRepétition.map((type) => (
            <Checkbox
              text={type}
              htmlFor={type}
              name="coursesType"
              handleChange={handleChange}
            />
          ))}
        </div>
        <Paragraphe classe="text-sm mt-3 md:mt-5 font-bold">
          Lieu de repetition
        </Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-xs">
          (vous pouvez selectionner plusieurs lieux)
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {lieuDeRepetion.map((lieu) => (
            <Checkbox
              text={lieu}
              htmlFor={lieu}
              name="coursesLocation"
              handleChange={handleChange}
            />
          ))}
        </div>
        <Paragraphe classe="text-sm mt-3 md:mt-5 mb-2 font-bold">
          Categorie
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {categories.map((categorie) => (
            <Checkbox
              text={categorie}
              htmlFor={categorie}
              name="categories"
              handleChange={handleChange}
            />
          ))}
        </div>
        <Input
          type="text"
          name="minPrice"
          id="minPrice"
          value={minPrice}
          handleChange={handleChange}
          placeholder="Entrez votre salaire minimum par mois(ex: 45000)"
        />
        <Input
          type="text"
          name="currentGradeLevel"
          id="currentGradeLevel"
          value={currentGradeLevel}
          handleChange={handleChange}
          placeholder="Entrez votre occupation actuel"
        />
        <Paragraphe classe="text-sm mt-3 font-bold">
          <span>Presentez-vous</span>{" "}
          <span className="text-xs md:text-xs font-normal">
            (minimum 100 caractères)
          </span>
        </Paragraphe>
        <textarea
          className="w-full px-3 py-2 md:py-3 text-xs md:text-sm font-normal text-gray-600 bg-white bg-clip-padding  border border-solid border-gray-300 transition ease-in-out m-0 focus:bg-gray2-ligth focus:outline-none"
          id="description"
          name="description"
          value={description}
          rows="4"
          placeholder="Decrivez vos"
          onChange={handleChange}
        ></textarea>
        <div className="flex gap-1 md:gap-5 w-full relative">
          <Button
            action={stop}
            classe="flex items-center justify-center mb-2 mt-6 hover:cursor-pointer text-white basis-3/12 opacity-90"
            theme="danger"
            link=""
            size="small"
          >
            <span className="tracking-wide opacity-90 ">Annulé</span>
          </Button>
          <Button
            onClick={() => {}}
            classe="flex items-center justify-center mb-2 mt-6 hover:cursor-pointer text-white basis-3/12 absolute right-0"
            theme=""
            size="small"
          >
            <span className="tracking-wide opacity-90">Terminer</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateServicesModal;
