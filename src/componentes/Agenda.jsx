import React from 'react'
import model from '../assets/model.png'
import Map from './Map'
const Agenda = () => {
  return (
    <div className="container2">
   <img src={model} className="agenda-img" alt="" />
    <div className="text-contentC">
    <p className="p-no-margin">
    Estamos aquí para ayudarle a hacer crecer su negocio.</p>
      <h1>¿Busca las mejores soluciones para tu negocio?</h1>
     
      <a href="/contacto" > <div className="button2"> Contáctanos {'>'}</div></a>
 
     
    </div>
 
  </div>
  )
}

export default Agenda