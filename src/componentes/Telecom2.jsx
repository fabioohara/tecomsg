import React from 'react'
import empresa from "../assets/nosotros/empresa.jpg";
import obrero from "../assets/nosotros/empresa-obreros.jpg";
import lt from "../assets/nosotros/linea-tiempo-icon.png";
import mision from "../assets/nosotros/mision-icon.svg";
import vision from "../assets/nosotros/vision-icon.svg";
import valor from "../assets/nosotros/valores-icon.svg";
import ventajas from "../assets/nosotros/ventajas.png";
import telecom1 from "../assets/servicios/telecom1.png";
import telecom2 from "../assets/servicios/telecom2.png";
import demo1 from "../assets/servicios/demo1.png";
import demo2 from "../assets/servicios/demo2.png";

import desarrollo from "../assets/nosotros/desarrollo-icon.svg";
import monitoreo from "../assets/nosotros/monitoreo-icon.svg";

 const valores = [
    { id: 1, name: 'Misión',icon: mision, describe:'Proveer soluciones efectivas en ingeniería, infraestructura y gestión de información, trabajando en entornos que promuevan la calidad, la seguridad y la responsabilidad social y ambiental, cumpliendo plazos y presupuestos establecidos.' },
    { id: 2, name: 'Visión', icon: vision, describe:'Ser la empresa líder y confiable en Perú en el desarrollo de soluciones tecnológicas, reconocida por la calidad de nuestros productos y servicios, con un compromiso constante hacia la innovación y el desarrollo sostenible.'},
    { id: 3, name: 'Valores',icon: valor, describe:'El éxito de nuestra empresa se debe gracias a nuestros valores fundamentales corporativos que son la innovación, transparencia, compromiso, responsabilidad social, etc.' },
   
  
  ];


const Telecom2 = () => {
  return (
   <>
    <div className="contenedor-servicios">
 
    
       
        <div className="overlay4">
        <img src={telecom1} alt="" className='img-empresa'/>
        <div className="overlay5">
        <h1 className='titulo-azul'>Creación de redes</h1>
        <p >Levantamiento, diseño, ingeniería, construcción, mantenimiento, supervisión de una red de fibra óptica, FTTH y HFC. Todo tipo de obras civiles dentro de las redes de fibra ´ptica, cableado estructurado e instalaciones de acometida a cliente final</p>
        </div>
  </div>
      
    
   
      <div className="overlay44">
    
      <div className="overlay6">
       <h1  className='titulo-azul'>Mantenimiento y supervisión </h1>
      <p>Nuestros software T* Comunica y su app T*Conecta creados por TECOM permiten que todas las etapas desde el diseño, la instalación, supervisión y el mantenimiento, se monitoreen en tiempo real y se procesen en forma automática, redes celulares 2G/ 3G/ 4G, permitiendo la entrega del proyecto en tiempo récord para la satisfacción de nuestros clientes
      </p>
      </div>
      <img src={telecom2} alt="" className='img-empresa' />
       </div>
     
    </div>

   
   
    <div className="demos">
    <h1 >Mira Nuestros Demos</h1>
    <div  className="demo1" >
        <div  className="demo2" >
          <img src={demo1} alt="" />
          <div className="empresa-item" >
          <div className="button-blue">
           T*Comunica {'>'}
          </div>
          </div>
         
         
       
          </div>

          <div  className="demo2" >
          <img src={demo2} alt="" />
          <div className="empresa-item" >
          <div className="button-blue">
           T*Conecta {'>'}
          </div>
          </div>
         
         
       
          </div>
        
     </div>
    </div> 

</>
    
  )
}

export default Telecom2
