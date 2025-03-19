import React from 'react';
import obras from "../assets/servicios/obras.png";
import fo from "../assets/servicios/fo.png";
import redes from "../assets/servicios/redes.png";

const Telecom = () => {
  const areas = [
    { id: 1, name: 'Redes de Fibra Óptica',icon: fo,describe:'Soluciones completas para FTTH, HFC y supervisión' },
    { id: 2, name: 'Obras civiles', icon: obras, describe:'Especialistas en infraestructuras de telecomunicaciones'},
    { id: 3, name: 'Redes celulares',icon: redes, describe:'Instalación y mantenimiento de redes móviles' },
  
  ];

   
  return (
    <div className="areas-ayuda-container">
     
      <div className="telecom-grid">
        {areas.map((area) => (
        <div  className="servicios" key={area.id}>
          <img src={area.icon} alt="" className='img-servicios'/>
          <div  className="servicios2" key={area.id}>
          <h3  >
            {area.name}
          </h3>
         
          <p > {area.describe}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Telecom;