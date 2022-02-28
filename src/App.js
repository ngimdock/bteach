import React from "react"
import { BrowserRouter } from "react-router-dom";

import Router from "./Router"

import "./css/App.css"

function App() {
  return (
    <BrowserRouter className="">
      <Router />
    </BrowserRouter>
  );
}

export default App;
