import React from 'react'
import empresa from "../assets/nosotros/empresa.jpg";
import obrero from "../assets/nosotros/empresa-obreros.jpg";
import lt from "../assets/nosotros/linea-tiempo-icon.png";
import mision from "../assets/nosotros/mision-icon.svg";
import vision from "../assets/nosotros/vision-icon.svg";
import valor from "../assets/nosotros/valores-icon.svg";
import ventajas from "../assets/nosotros/ventajas.png";
import procesamiento from "../assets/nosotros/procesamiento-icon.svg";
import desarrollo from "../assets/nosotros/desarrollo-icon.svg";
import monitoreo from "../assets/nosotros/monitoreo-icon.svg";

 const valores = [
    { id: 1, name: 'Misión',icon: mision, describe:'Proveer soluciones efectivas en ingeniería, infraestructura y gestión de información, trabajando en entornos que promuevan la calidad, la seguridad y la responsabilidad social y ambiental, cumpliendo plazos y presupuestos establecidos.' },
    { id: 2, name: 'Visión', icon: vision, describe:'Ser la empresa líder y confiable en Perú en el desarrollo de soluciones tecnológicas, reconocida por la calidad de nuestros productos y servicios, con un compromiso constante hacia la innovación y el desarrollo sostenible.'},
    { id: 3, name: 'Valores',icon: valor, describe:'El éxito de nuestra empresa se debe gracias a nuestros valores fundamentales corporativos que son la innovación, transparencia, compromiso, responsabilidad social, etc.' },
   
  
  ];


const Card1 = () => {
  return (
    <div className="contenedor-nuestra-empresa">
    <div className="contenedor-empresa">
  
      <div className="item2">
       
        <div className="overlay2">
        <img src={empresa} alt="" className='img-empresa'/>
        <p>Fue creada en el año 2011, para ofrecer soluciones innovadoras y globales en áreas como Telecomunicaciones, Geomática, Catastro e Impuestos Prediales, Desarrollo de software y Obras Civiles.</p>
  </div>
      </div>
      <img src={lt} alt="" className='img-lt'/>
      <div className="item2">
      <div className="overlay3">
     
       
      <p>Fue creada en el año 2011, para ofrecer soluciones innovadoras y globales en áreas como Telecomunicaciones, Geomática, Catastro e Impuestos Prediales, Desarrollo de software y Obras Civiles.</p>
      <img src={obrero} alt="" className='img-empresa' />
       </div>
      </div>
    </div>

   
    
    <div className="areas-empresa-grid">
        {valores.map((valor) => (
        <div  className="valores" key={valor.id}>
          <img src={valor.icon} alt="" className='empresa-img'/>
          <div className="empresa-item" >
            {valor.name}
          </div>
         
          <div className='empresa-describe'> {valor.describe}</div>
       
          </div>
        ))}
     
    </div> 

<h1 className='titulo-ventajas'>Nuestras Ventajas</h1>
    <div className="contenedor-ventajas">
  
  <div className="item2">
   
    <img src={ventajas} alt="" className='img-empresa'/>
 
  </div>
 
  <div className="item2">
    
  <div className='ventajas'>
  <img src={desarrollo} className="img-ventaja" alt="" /><p>Desarrollo de aplicaciones</p>
</div> 

<div className='ventajas'>
  <img src={monitoreo}  className="img-ventaja" alt="" /><p>Monitoreo del sistema en tiempo real</p>
  </div> 

  <div className='ventajas'>
  <img src={procesamiento}  className="img-ventaja" alt="" /><p>Procesamiento íntegro de la información</p>
  </div> 

   
  </div>
</div>

    </div>
  )
}

export default Card1
