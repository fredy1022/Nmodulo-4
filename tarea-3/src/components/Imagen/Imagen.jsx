import React from 'react'
import './Imagen.css'

function Imagen(props) {

  return <img src={props.url} alt="Foto de el artista/personaje" />;
}
export default Imagen;