import React from "react"
import { BrowserRouter } from "react-router-dom";

import Person from "./entities/Person"
import Feedback from "./entities/Feedback"

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

  const objFeedback = {
    id: 123,
    title : "Arnaque d'un repetiteur",
    message : "J'ai paye le repetiteur STEPHANE mais il n'a pas fait son travail, je demande qu'on le bloque"
  }

  const objFeedback2 = {
    id: 123,
    title : "(modifier) Arnaque d'un repetiteur",
    message : "(modifier) J'ai paye le repetiteur STEPHANE mais il n'a pas fait son travail, je demande qu'on le bloque"
  }

  const objFeedback3 = {
    id: 124,
    title : "(modifier 2) Arnaque d'un repetiteur",
    message : "(modifier 2) J'ai paye le repetiteur STEPHANE mais il n'a pas fait son travail, je demande qu'on le bloque"
  }

  const per = new Person(objRepeater)
  console.log(per.getFeedbacks)
  per.createFeedback(objFeedback2)
  per.createFeedback(objFeedback3)
  console.log(per.getFeedbacks[0].getTitle)
  per.updateFeedback(123, objFeedback3)
  console.log(per.getFeedbacks[0].getTitle)

  const feed = new Feedback(objFeedback)

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
