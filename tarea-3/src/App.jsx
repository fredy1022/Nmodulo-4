import React from "react";
import Titulo from "./components/Titulo/Titulo";
import Imagen from "./components/Imagen/Imagen";
import Detalles from "./components/Detalles/detalles";
import './App.css';

function App() {
  const url = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  const genre = 'male'
  const status = 'alive'

  return (
    <div>
      <Titulo title='Rick Sanchez' />
      <Imagen url={url} />
      <Detalles genre={genre} status={status} />
    </div>

  )
}
export default App
