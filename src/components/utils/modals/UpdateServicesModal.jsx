import React, { useEffect, useState, useContext } from "react";
import {
  firebaseServiceGetService,
  firebaseServiceUpdateService
} from "../../../api/Services";
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
import currentUserContext from "../../../dataManager/context/currentUserContext";
import { ToastContext } from 'react-simple-toastify'
import LoaderCircle from "../../../components/utils/loaders/LoaderCircle";

const UpdateServicesModal = ({ stop, serviceId, service }) => {
  // Set local state
  const [formData, setFormData] = useState({
    categories: service.categories,
    coursesLocation: service.coursesLocation,
    coursesType: service.coursesType,
    currentGradeLevel: service.currentGradeLevel,
    description: service.description,
    minPrice: service.minPrice,
    levelsUnit: service.levelsUnit,
    teachingUnit: service.teachingUnit,
    isVisible: false,
  });
  const [loading, setLoading] = useState(false);
  let [triggerServer, activateTriggerServer] = useState("not triggered");

  // Get global state
  const { updateService } = useContext(currentUserContext);
  const { displayToast } = useContext(ToastContext)

  useEffect(() => {
    if (triggerServer === "triggered" && validateForm() && !loading) {
      setLoading(true);
      
      serverResponse(setLoading)
    }
  }, [triggerServer, loading]);

  const serverResponse = async (setLoading) => {
    const { data } = await firebaseServiceUpdateService(
      serviceId,
      formData
    );

    if (data) {
      getCurrentService(setLoading)

      displayToast("Votre service a été mis à jour, pensez à publier")
    }
  };

  const getCurrentService = async () => {
    const { data } = await firebaseServiceGetService(serviceId)

    if (data) {
      updateService(data);
      stop();
    }

    setLoading(false)
  }

  const handleChange = (event) => {
    activateTriggerServer("not triggered");

    const value = event.target.value
    if (!loading) {
      if (event.target.type === "checkbox") {
        switch (event.target.name) {
          case "categories": {
            const formDataClone = {...formData}

            const exist = formDataClone.categories.includes(value)

            if (exist) {
              formDataClone.categories = formDataClone.categories.filter(unit => unit !== value)
            } else {
              formDataClone.categories.push(value)
            }

            setFormData(formDataClone);

            break;
          }

          case "coursesLocation": {
            const formDataClone = {...formData}

            const exist = formDataClone.coursesLocation.includes(value)

            if (exist) {
              formDataClone.coursesLocation = formDataClone.coursesLocation.filter(unit => unit !== value)
            } else {
              formDataClone.coursesLocation.push(value)
            }

            setFormData(formDataClone);

            break;
          }

          case "coursesType": {
            const formDataClone = {...formData}

            const exist = formDataClone.coursesType.includes(value)

            if (exist) {
              formDataClone.coursesType = formDataClone.coursesType.filter(unit => unit !== value)
            } else {
              formDataClone.coursesType.push(value)
            }

            setFormData(formDataClone);

            break;
          }

          case "levelsUnit": {
            const formDataClone = {...formData}

            const exist = formDataClone.levelsUnit.includes(value)

            if (exist) {
              formDataClone.levelsUnit = formDataClone.levelsUnit.filter(unit => unit !== value)
            } else {
              formDataClone.levelsUnit.push(value)
            }

            setFormData(formDataClone);

            break;
          }

          case "teachingUnit": {
            const formDataClone = {...formData}

            const exist = formDataClone.teachingUnit.includes(value)

            if (exist) {
              formDataClone.teachingUnit = formDataClone.teachingUnit.filter(unit => unit !== value)
            } else {
              formDataClone.teachingUnit.push(value)
            }
            setFormData(formDataClone);

            break;
          }

          default: break
        }
      } else {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    }
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    activateTriggerServer("triggered");
    if (!validateForm()) {
      alert("Remplissez tous le formulaire");
    }
  };

  const validateForm = () => {
    const {
      categories,
      coursesLocation,
      coursesType,
      currentGradeLevel,
      description,
      minPrice,
      levelsUnit,
      teachingUnit,
    } = formData;

    if (
      categories &&
      coursesLocation &&
      coursesType &&
      currentGradeLevel &&
      description &&
      minPrice &&
      levelsUnit &&
      teachingUnit
    ) {
      return true;
    }

    return false;
  };

  const { minPrice, description, currentGradeLevel } = formData;
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "calc(100% - 0px)",
        overflowY: "scroll",
        backgroundColor: "#0f272e",
      }} 
      className="w-screen h-auto bg-white z-50 py-8"
    >
      {
        loading && <LoaderCircle size="large" position="fixed" />
      }
      <H3
        color="#fff"
        classe="mb-10 text-center mx-auto w-11/12 max-w-xl"
      >
        Ci-Dessous le formulaire pour modifier les informations de votre
        service
      </H3>
      <form style={{ opacity: loading ? .6:1 }} className="shadow-md-x py-5 px-3 sm:px-5 sm:py-7 rounded-xl flex flex-col w-11/12 max-w-xl text-gray-600 bg-white mx-auto">
        <Paragraphe classe="text-sm mb-0 font-bold">Filières</Paragraphe>
        <Paragraphe classe="text-xs mb-2 mt-0 md:text-xs">
          (il est recommandé de sélectionner maximum 3 filières)
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {matiere.map((matiere) => (
            <Checkbox
              key={matiere}
              text={matiere}
              htmlFor={matiere}
              name="teachingUnit"
              values={formData.teachingUnit}
              handleChange={handleChange}
            />
          ))}
        </div>
        <Paragraphe classe="text-sm mt-3 md:mt-5 font-bold">
          Niveau scolaire
        </Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-xs">
          (vous pouvez sélectionner plusieurs niveaux)
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {niveauScolarie.map((niveau) => (
            <Checkbox
              key={niveau}
              text={niveau}
              htmlFor={niveau}
              name="levelsUnit"
              values={formData.levelsUnit}
              handleChange={handleChange}
            />
          ))}
        </div>
        <Paragraphe classe="text-sm mt-3 md:mt-5 font-bold">
          Type de répétiton
        </Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-xs">
          (vous pouvez sélectionner plusieurs type)
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {typeDeRepétition.map((type) => (
            <Checkbox
              key={type}
              text={type}
              htmlFor={type}
              name="coursesType"
              values={formData.coursesType}
              handleChange={handleChange}
            />
          ))}
        </div>
        <Paragraphe classe="text-sm mt-3 md:mt-5 font-bold">
          Lieu de répétition
        </Paragraphe>
        <Paragraphe classe="text-xs mb-2 md:text-xs">
          (vous pouvez sélectionner plusieurs lieux)
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {lieuDeRepetion.map((lieu) => (
            <Checkbox
              key={lieu}
              text={lieu}
              htmlFor={lieu}
              name="coursesLocation"
              values={formData.coursesLocation}
              handleChange={handleChange}
            />
          ))}
        </div>
        <Paragraphe classe="text-sm mt-3 md:mt-5 mb-2 font-bold">
          Catégorie
        </Paragraphe>
        <div className="md:flex  flex-wrap">
          {categories.map((categorie) => (
            <Checkbox
              key={categorie}
              text={categorie}
              htmlFor={categorie}
              name="categories"
              values={formData.categories}
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
          <span>Présentez-vous</span>{" "}
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
            action={handleFormSubmission}
            classe="flex items-center justify-center mb-2 mt-6 hover:cursor-pointer text-white basis-3/12 absolute right-0"
            theme=""
            size="small"
            link=""
          >
            <span className="tracking-wide opacity-90">Terminer</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateServicesModal;
