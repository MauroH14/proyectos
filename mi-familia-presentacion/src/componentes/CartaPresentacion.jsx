import React from "react";
import "../hojas-de-estilo/CartaPresentacion.css";

function CartaPresentacion({ imagen, nombre, tipo, vinculo, descripcion }) {
  if (!imagen) {
    return <p>Imagen no disponible</p>; // O algún otro enfoque de manejo de error
  }
  return (
    <div className = "presentacion">
      <img className="imagen"
        src = {require(`../imagenes/${imagen}.png`)}
        alt = {`foto de ${nombre}`} />
      <div className = "contenedor-presentacion">
        <p className = "nombre"> {nombre} </p>
        <p className = "vinculo"> { tipo } es mi {vinculo} </p>
        <p className = "descripcion"> {descripcion} </p>
      </div>
    </div>
  )
}
export default CartaPresentacion