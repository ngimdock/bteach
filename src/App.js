import React from 'react'
import { BrowserRouter } from "react-router-dom";

import ContextProvider from "./ContextProvider"

import User from "./entities/User"
import Administrator from "./entities/Administrator"

import Customer from "./entities/Customer"
import Annonce from "./entities/Annonce"
import Repeater from "./entities/Repeater"
import Service from "./entities/Service"

import Router from "./Router"

import "./css/App.css"
import LoadingPage from './components/marketing/navbar/LoadingPage';

function App() {

  // Ne considez pas le code si dessous, je l'utilise pour faire les tests unitaires sur les classes
  const objRepeater = {
    id: 10, 
    name: "ngimdock", 
    firstName: "zemfack", 
    email: "ngimdock@gmail.com", 
    password: "123herz", 
    phone: 677109798,
    date: "herz", 
    sex: "male", 
    town: "yaounde", 
    district: "bonas", 
    profilePic: "photo",
    notes: [
      {id: 101, stars: 5, message: "note 1 au calme"},
      {id: 102, stars: 6, message: "note 2 au calme"},
      {id: 103, stars: 7, message: "note 3 au calme"}
    ]
  }

  const objService ={
    minPrise: 20000,
    currentGradeLevel: "Bac + 5 maths",
    teachingUnit : ["Maths", "Physique", "chimie"],
    levelsUnit : ["primaire", "secondaire", "Universite"],
    coursesType: ["cours individuel", "cours en groupe"],
    coursesLocation : ["chez le prof", "chew l'eleve"],
    description : "je me decrit comme etatnt un tres bon prof pour ton niveau scolaire"
  }

  const objAnnonce = {
    classLevel : "Terminale",
    units : ["Anglais, Philo"],
    message : "Je cherche un repetiteur"
  }

  const objFeedback = {
    id: 123,
    title : "Arnaque d'un repetiteur",
    message : "J'ai paye le repetiteur STEPHANE mais il n'a pas fait son travail, je demande qu'on le bloque"
  }

  const objNote = {
    id: 11,
    starts: 5,
    message: "STEPHANE est un tres bon repetiteur"
  }

  const user = new User(objRepeater)
  const repeat = new Repeater(objRepeater)
  const custum = new Customer(objRepeater)
  const admin = new Administrator(objRepeater)
  
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ContextProvider>

      <LoadingPage />
    </>
  );
}

export default App;
