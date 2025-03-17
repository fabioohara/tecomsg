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
          <span className="categoria">CATASTRO</span>
          <h3>Tampa cartografía las carreteras para reducir los accidentes mortales</h3>
          <p>Leer artículo en el blog de TECOM</p>
        </div>
      </div>

      <div className="item">
        <div className="overlay">
          <span className="categoria">TELECOMUNICACIONES</span>
          <h3>Soluciones FTTH para aplicaciones de redes</h3>
          <p>Leer artículo en el blog de TECOM</p>
        </div>
      </div>

      <div className="item">
        <div className="overlay">
          <span className="categoria">OBRAS CIVILES</span>
          <h3>Beneficios de usar viguetas prensadas</h3>
          <p>Leer artículo en el blog de TECOM</p>
        </div>
      </div>
    </div>
  )
}

export default Card1
