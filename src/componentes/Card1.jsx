import React from 'react'

const Card1 = () => {
  return (
    <div className="contenedor">
      {/* Nueva fila que ocupa el 100% del ancho */}
      <div className="titulo">
        <h2>Casos de Éxito</h2>
      </div>

      <div className="item grande">
        <div className="overlay">
          <span className="categoria">CATASTRO / PREDIAL</span>
          <h3>Reducción de hasta el 60% en costos tributarios en clientes como Petroperú.</h3>
        
        </div>
      </div>

      <div className="item">
        <div className="overlay">
          <span className="categoria">TELECOMUNICACIONES</span>
          <h3>Implementaciones FTTH en más de 20 ciudades en Perú.</h3>
         
        </div>
      </div>

      <div className="item">
        <div className="overlay">
          <span className="categoria">SOFTWARE</span>
          <h3>Supervisión y control de más de 15,000 postes y predios en proyectos FTTH y catastrales.</h3>
         
        </div>
      </div>
    </div>
  )
}

export default Card1
