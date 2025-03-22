import React from 'react';
import telecom from "../assets/iconos/telecom.svg";
import catastro from "../assets/iconos/catastro.svg";
import software from "../assets/iconos/software.svg";
import obras from "../assets/iconos/obras.svg";

const Ayuda = () => {
  const areas = [
    { id: 1, name: 'Telecomunicaciones',link:'/telecomunicaciones', icon: telecom,describe:'Desde el diseño hasta el mantenimiento, brindamos servicios completos en redes de telecomunicaciones, cableado estructurado y redes móviles.' },
    { id: 2, name: 'Catastro - Impuesto Predial', link:'/catastro',icon: catastro, describe:'En TECOM ofrecemos servicios especializados en levantamiento catastral tanto urbano como rural. Nos enfocamos en brindar soluciones precisas para la valorización de bienes inmuebles y el cálculo del impuesto predial, utilizando herramientas modernas y eficientes.'},
    { id: 3, name: 'Software', link:'/software',icon: software, describe:'Transformamos datos en conocimiento a través de herramientas geoespaciales avanzadas. Nos especializamos en el desarrollo de sistemas de información geográfica (SIG) utilizando software libre como QGIS y plataformas comerciales como ArcGIS, ofreciendo soluciones accesibles y personalizadas.' },
  
  ];

   
  return (
    <div className="areas-ayuda-container">
      <h2>Nuestros Servicios</h2>
      <p>Contamos con un equipo de profesionales; ampliamente experimentados y capacitados, que aseguran la entrega en tiempo récord cualquier proyecto que nos involucremos.</p>
    
      <div className="areas-ayuda-grid">
        {areas.map((area) => (
        <div  key={area.id}>
          <img src={area.icon} alt="" className='img-ayuda'/>
          <div className="area-item" >
            {area.name}
          </div>
          <hr className='hr'/>
          <div className='area-item-describe'> {area.describe}</div>
          <a href={area.link} ><div className="div-rounded-ayuda">Ver más...</div></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ayuda;