import React from "react"
import { BrowserRouter } from "react-router-dom";

import User from "./entities/User"
import Note from "./entities/Note"
import Repeater from "./entities/Repeater"
import Customer from "./entities/Customer"
import Annonce from "./entities/Annonce"

import Router from "./Router"

import "./css/App.css"

function App() {

  // Ne considez pas le code si dessous, je l'utilise pour faire les tests unitaires sur les classes
  const objRepeater = {
    id: 10, 
    name: "ngimdock", 
    firstName: "zemfack", 
    email: "ngimdock@gmail.com", 
    password: "123herz", 
    phone1: 677109798, 
    phone2: 655951494, 
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

  const objAnnonce2 = {
    classLevel : "Premiere",
    units : ["Francais, Geo"],
    message : "(modifier)Je cherche un repetiteur"
  }

  const custom = new Customer(objRepeater)
  console.log(custom.getAnnonce)
  custom.createAnnonce(objAnnonce)
  console.log(custom.getAnnonce.getMessage)
  custom.updateAnnonce(objAnnonce2)
  console.log(custom.getAnnonce.getMessage)

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
