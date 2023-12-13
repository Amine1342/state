import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/header";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-center text-success mt-3">useState Hooks</h1>
      <ClassState />
      <hr />
      <FunctionState />
    </div>
  );
}

export default App;
