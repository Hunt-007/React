import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css"; No lo ocupamo de momento

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div className="container-fluid mt-4">
        <NavBar />
        <ItemListContainer mensaje="¡Gracias por visitarnos Mi tienda! Mas adelante podras explora nuestros productos, ya que estamos realizando el desarrollo." />
      </div>
    </>
  );
}

export default App;
