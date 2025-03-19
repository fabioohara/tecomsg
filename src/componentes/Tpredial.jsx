import React from 'react';
import geo from "../assets/software/geo.svg";
import ficha from "../assets/software/ficha.svg";
import mapa from "../assets/software/mapa.svg";
import check from "../assets/iconos/check.svg";
import n2 from "../assets/software/n2.svg";
import n3 from "../assets/software/n3.svg";
import n4 from "../assets/software/n3.svg";

const Tpredial = () => {
  const areas = [
    { id: 1, name: 'Cálculo Automatizado',icon: geo,describe:'Determinación precisa de la base imponible e impuestos según normativas locales.' },
    { id: 2, name: 'Peritajes y Tasaciones', icon: ficha, describe:'Evaluaciones ajustadas a estándares legales y técnicos.'},
    { id: 3, name: 'Reportes Detallados',icon: mapa, describe:'Generación de informes completos y visualizaciones gráficas para decisiones estratégicas.' },
    { id: 4, name: 'Integración de Datos Catastrales',icon: mapa, describe:'Sincronización con información geográfica para mayor exactitud.' },

  ];

  const beneficios = [
    { id: 1, name: 'Ahorro Tributario',icon: check,describe:'Reducción de costos hasta en un 60% (casos como Petroperú).' },
    { id: 2, name: 'Gestión Transparente',icon: check, describe:'Mayor confianza en procesos fiscales gracias a la precisión y adecuación legal.'},
    { id: 3, name: 'Cumplimiento Normativo:',icon: check, describe:'Adaptación a leyes locales y nacionales, garantizando confiabilidad en los cálculos.' },

  ];

   
  return (
    <div className="software-container">
      <h1>Funciones Principales</h1>
    
      <div className="software-grid-4">
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
  <h1>Beneficios Clave</h1>
 {beneficios.map((beneficio) => (
          <div className='beneficios-div'>
            <div> <img src={beneficio.icon} className="img-beneficios" alt="" /></div>
         
         
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

export default Tpredial;