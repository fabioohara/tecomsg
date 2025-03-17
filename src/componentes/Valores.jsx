import React from 'react'
import integridad from '../assets/integridad.png'
import compromiso from '../assets/compromiso.png'
import profesionalismo from '../assets/profesionalismo.png'
import accesibilidad from '../assets/accesibilidad.png'

const Valores = () => {
  return (
    <div class="valores-container">
    <div class="bloque-c noshadow">
      <h2>Nuestros Valores</h2>
      <hr className='hrV'/>
      <p>En Senisse Abogados, creemos que la base de una relación sólida con nuestros clientes está en la confianza y la integridad. Nos guiamos por cuatro pilares fundamentales:</p>
     
    </div>
    <div class="bloque-d">
      <div class="step">
        <span class="number"><img src={integridad}/></span>
        <div class="content">
          <h3>Integridad:</h3>
           <p>Actuamos con honestidad y transparencia en cada caso que asumimos.</p>
        </div>
      </div>
      <div class="step">
      <span class="number"><img src={compromiso}/></span>
        <div class="content">
          <h3>Compromiso:</h3>
          <p>Estamos dedicados a resolver cada situación con la mayor atención y cuidado posible.</p>
        </div>
      </div>
      <div class="step">
      <span class="number"><img src={profesionalismo}/></span>
        <div class="content">
          <h3>Profesionalismo:</h3>
          <p>Nuestro equipo cuenta con la experiencia y el conocimiento para enfrentar cualquier desafío legal.</p>
        </div>
      </div>
     
      <div class="step">
      <span class="number"><img src={accesibilidad}/></span>
        <div class="content">
          <h3>Accesibilidad:</h3>
          <p>Ofrecemos asesoría en múltiples formatos, asegurando que puedas acceder a nuestros servicios donde y cuando los necesites.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Valores