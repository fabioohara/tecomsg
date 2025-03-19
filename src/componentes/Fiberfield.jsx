import React from 'react';
import icon1 from "../assets/software/icon1.png";
import icon2 from "../assets/software/icon2.png";
import icon3 from "../assets/software/icon3.png";
import check from "../assets/iconos/check.svg";

const FiberField = () => {
  const areas = [
    { id: 1, name: 'Planeamiento',icon: icon1,describe:'Uso de ortofotos y modelamiento topográfico, para diseñar redes óptimas.' },
    { id: 2, name: 'Diseño y Construcción', icon: icon2, describe:'Supervisión en tiempo real de tendido y conexión de redes.'},
    { id: 3, name: 'Modularidad y Escalabilidad',icon: icon3, describe:'Adaptable a proyectos de cualquier tamaño' },
  
  ];

  const beneficios = [
    { id: 1, name: 'Reducción de costos y tiempos',describe:'Optimiza recursos y acelera la implementación de redes FTTH.' },
    { id: 2, name: 'Precisión y eficiencia', describe:'Diseño basado en SIG y ortofotos para despliegues más exactos.'},
    { id: 3, name: 'Visibilidad total', describe:'Supervisión en tiempo real en todas las etapas del proyecto.' },
    { id: 4, name: 'Escalabilidad garantizada',describe:'Adaptable a proyectos de cualquier tamaño y complejidad.' },
    { id:5, name: 'Resultados comprobados', describe:'Mejora operativa en más de 20 ciudades del Perú.' },

  ];

   
  return (
    <div className="software-container">
      <h1>Características Principales</h1>
    
      <div className="software-grid">
        {areas.map((area) => (
        <div  key={area.id}>
          <img src={area.icon} alt="" className='img-software'/>
          <div className="area-item" >
            {area.name}
          </div>
         
          <div className='area-item-describe'> {area.describe}</div>
         
          </div>
        ))}
      </div>
 <div className="item3">
  <h1>Beneficios</h1>
 {beneficios.map((beneficio) => (
          <div className='beneficios-div'>
            <div> <img src={check} className="img-beneficios" alt="" /></div>
         
         
            <div className='beneficios-div2'>
            <h3 className='beneficios-h3'>{beneficio.name} </h3>
            <p className='beneficios-p'>{beneficio.describe}</p>
            </div>
         
         
        </div> 
        ))}
   
        
           
          </div>

    </div>

    
  );
};

export default FiberField;