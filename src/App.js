import React from "react"
import { BrowserRouter } from "react-router-dom";

import User from "./entities/User"
import Note from "./entities/Note"
import Repeater from "./entities/Repeater"

import Router from "./Router"

import "./css/App.css"

function App() {

  // Ne considez pas le code si dessous, je l'utilise pour faire les tests unitaires sur les classes
  const obj = {
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

  // const dan = new User(obj)
  // console.log(dan)
  // dan.updateUser(obj2)
  // console.log(dan)

  const note1 = new Note({ id: 10, stars: 5, message: "message denote..." })
  console.log(note1)
  note1.setIsVisible(false)
  console.log(note1)

  const repeat = new Repeater(obj, "je suis special")
  console.log(repeat)
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
