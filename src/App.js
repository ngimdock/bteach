import React from "react"
import { BrowserRouter } from "react-router-dom";

import "./css/App.css"

function App() {
  return (
    <div className="">
      <span className="text-7xl font-bold text-dark bg-gray-200 p-5">hello</span>
      <span className="text-7xl font-bold text-black bg-gray-200 p-5">hello</span>
      <div className="w-20 h-20 bg-dark"></div>
      <div className="w-20 h-20 bg-black"></div>
    </div>
  );
}

export default App;
