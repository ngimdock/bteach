import React from 'react'
import { BrowserRouter } from "react-router-dom";

import ContextProvider from "./ContextProvider"

import Router from "./Router"

import "./css/App.css"
import LoadingPage from './components/marketing/navbar/LoadingPage';
import SearchProvider from './dataManager/providers/searchProvider';
import { ToastProvider } from 'react-simple-toastify'

function App() {

  const toastOptions = {
    position: "bottom",
    timeout: 3000
  }

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <SearchProvider>
            <ToastProvider options={toastOptions}>

              <Router />
            </ToastProvider>
          </SearchProvider>
        </BrowserRouter>
      </ContextProvider>

      <LoadingPage />
    </>
  );
}

export default App;
