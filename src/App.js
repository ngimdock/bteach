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
