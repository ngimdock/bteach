import React from "react";
import { Link } from "react-router-dom";
import { RiAlertFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { BsEyeSlash } from "react-icons/bs";
import H3 from "../../../components/elements/titles/H3";
import Button from "../../../components/elements/buttons/Button";
import Paragraphe from "../../../components/elements/p/Paragraphe";

const text =
  "Je suis gaelle kengne, éleve de premiere C en physique je cherche un repetiteur en physique pour mieux comprendre les notions enseignes en cours afin de passer mon probatoire avec une bonne mention.";
const text1 =
  "Je suis tres travailleuse et je progresse rapidement, vous pouvez contez sur moi pour respecter votre professionalisme et effectuer les exercices que vous allez me donner.";
const text2 = "N'hesitez pas à me contacter pour plus de detail...";

const BodyClientProfile = () => {
  return (
    <div className="bg-[#00000090] w-full h-full flex flex-col items-center justify-center py-20">
      <div className="w-11/12 h-full md:max-h-full md:max-w-3xl flex flex-col items-center justify-center">
        <IoCloseSharp className="text-secondary w-8 h-8 md:w-16 md:h-16 self-end" />
        <div className="rounded-md bg-white grid grid-cols-1 grid-flow-row gap-4 max-w-3xl p-4 md:px-10 md:py-8 md:gap-6">
          <div className="text-secondary flex items-center">
            <RiAlertFill className="h-" />
            <span className="ml-2 items-center text-xs md:text-base">
              Pour voir les contacts de Gaelle vous devez{" "}
              <Link
                to="/client/sign_up"
                className="underline decoration-secondary"
              >
                vous connecter
              </Link>{" "}
              ou{" "}
              <Link to="/" className="underline decoration-secondary">
                créer un compte
              </Link>
            </span>
          </div>
          <div className="grid grid-cols-1 grid-flow-row xs:grid-rows-1 xs:grid-flow-col gap-3">
            <img
              className="rounded-md"
              src="../../../medias/photos/africanWomen.jpg"
              alt="client thumbnail"
            />
            <div className="grid grid-col-1 grid-flow-row gap-3">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col gap-1 md:gap-3 basis-7/12">
                  <H3>Gaelle kengne tamho</H3>
                  <Paragraphe children="Filieres: Svt, Physique, Chimie" />
                  <Paragraphe children="Classe: Premiere D" />
                  <Paragraphe
                    classe="text-white flex items-center"
                    children={
                      <>
                        <GrMapLocation className="text-gray-600" />
                        <span className="ml-1">Yaounde (nkolbison)</span>
                      </>
                    }
                  />
                </div>
                <Button
                  classe="w-fit md:basis-5/12 md:mb-7 md:self-end flex items-center"
                  size="small"
                  theme="blue"
                  children={
                    <>
                      <BsEyeSlash className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      <span className="text-xs normal-case">
                        Masquer votre offre
                      </span>
                    </>
                  }
                />
              </div>
              <div className="flex gap-1 md:gap-5">
                <Button
                  classe="font-bold normal-case"
                  size="small"
                  rounded="rounded"
                  theme="dark"
                  children="Envoyer un mail"
                />
                <Button
                  size="small"
                  theme="dark"
                  rounded="rounded"
                  children={
                    <>
                      <span className="uppercase">Tel1:</span>
                      <span className="font-bold"> 6 55 95 14 94</span>
                    </>
                  }
                />
                <Button
                  size="small"
                  theme="dark"
                  rounded="rounded"
                  children={
                    <>
                      <span className="uppercase">Tel1:</span>
                      <span className="font-bold"> 6 55 95 14 94</span>
                    </>
                  }
                />
              </div>
            </div>
          </div>
          <Paragraphe
            classe="text-gray-800 opacity-60 text-xs md:text-sm"
            children={
              <>
                <span>{text}</span>
                {text1}
                {text2}
              </>
            }
          />
          <div className="flex flex-wrap gap-2 md:gap-6">
            <Button
              size="small"
              theme="dark"
              classe="bg-gray-900 text-white normal-case"
              children="Modifier vos informations personnelles"
            />
            <Button
              size="small"
              theme="dark"
              classe="bg-gray-900 text-white normal-case"
              children="Modifier votre offre de repétition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyClientProfile;
