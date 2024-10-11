import React from 'react'
import './Detalles.css'

function Detalles(props) {
  return (
    <div>
      <p>
        <b>Genero:</b> {props.genre}
      </p>
      <p>
        <b>Estado:</b> {props.status}
      </p>
    </div>
  );
}
export default Detalles;