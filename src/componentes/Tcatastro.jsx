import React from 'react';
import geo from "../assets/software/geo.svg";
import ficha from "../assets/software/ficha.svg";
import mapa from "../assets/software/mapa.svg";
import n1 from "../assets/software/n1.svg";
import n2 from "../assets/software/n2.svg";
import n3 from "../assets/software/n3.svg";
import n4 from "../assets/software/n3.svg";

const Tcatastro = () => {
  const areas = [
    { id: 1, name: 'Georreferenciación',icon: geo,describe:'Ubica predios y terrenos en mapas interactivos con precisión.' },
    { id: 2, name: 'Fichas Catastrales Digitales', icon: ficha, describe:'Consulta y actualiza información catastral de forma rápida.'},
    { id: 3, name: 'Mapas Temáticos',icon: mapa, describe:'Crea mapas personalizados para análisis y toma de decisiones.' },
  
  ];

  const beneficios = [
    { id: 1, name: 'Registro de Datos',icon: n1,describe:'Ingresa predios, terrenos y edificaciones en una base centralizada.' },
    { id: 2, name: 'Georreferenciación',icon: n2, describe:'Visualiza datos en mapas interactivos con precisión.'},
    { id: 3, name: 'Fichas Digitales',icon: n3, describe:'Consulta o edita información catastral con facilidad.' },
    { id: 4, name: 'Análisis Geoespacial',icon: n4,describe:'Genera mapas temáticos para mejorar la toma de decisiones.' },

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
  <h1>Flujo de proceso</h1>
 {beneficios.map((beneficio) => (
          <div className='beneficios-div'>
            <div> <img src={beneficio.icon} className="img-beneficios" alt="" /></div>
         
         
            <div className='beneficios-div2'>
            <h3 className='beneficios-h3'>{beneficio.name} </h3>
            <hr />
            <p className='beneficios-p'>{beneficio.describe}</p>
            </div>
         
         
        </div> 
        ))}
   
        
           
          </div>

    </div>

    
  );
};

export default Tcatastro;