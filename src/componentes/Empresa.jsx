import React from 'react';
import empresa from "../assets/nosotros/empresa.jpg";
import obrero from "../assets/nosotros/empresa-obreros.jpg";
import mision from "../assets/nosotros/mision-icon.svg";
import vision from "../assets/nosotros/vision-icon.svg";
import valor from "../assets/nosotros/valores-icon.svg";
import lt from "../assets/nosotros/linea-tiempo-icon.png"
const Empresa = () => {
  const lineas = [
    { id: 1, name: 'Creación',image: empresa,describe:'Fue creada en el año 2011, para ofrecer soluciones innovadoras y globales en áreas como Telecomunicaciones, Geomática, Catastro e Impuestos Prediales, Desarrollo de software y Obras Civiles.' },
    { id: 2, name: 'Catastro - Impuesto Predial', image: obrero, describe:'Contamos y desarrollamos software, además de aplicar metodologías adecuadas, para crear soluciones a la medida de las necesidades de nuestros clientes.'},
   
  ];

  const valores = [
    { id: 1, name: 'Misión',icon: mision, describe:'Proveer soluciones efectivas en ingeniería, infraestructura y gestión de información, trabajando en entornos que promuevan la calidad, la seguridad y la responsabilidad social y ambiental, cumpliendo plazos y presupuestos establecidos.' },
    { id: 2, name: 'visión', icon: vision, describe:'Ser la empresa líder y confiable en Perú en el desarrollo de soluciones tecnológicas, reconocida por la calidad de nuestros productos y servicios, con un compromiso constante hacia la innovación y el desarrollo sostenible.'},
    { id: 3, name: 'Valores',icon: valor, describe:'El éxito de nuestra empresa se debe gracias a nuestros valores fundamentales corporativos que son la innovación, transparencia, compromiso, responsabilidad social, etc.' },
   
  
  ];


   
  return (
    <div className="areas-empresa-container">
  <img src={lt} alt="" className='img-lt'/>
 <div className="areas-empresa-time">

        <div >
          <img src={empresa} alt="" className='img-empresa'/>
          <div className='area-empresa-describe'>Fue creada en el año 2011, para ofrecer soluciones innovadoras y globales en áreas como Telecomunicaciones, Geomática, Catastro e Impuestos Prediales, Desarrollo de software y Obras Civiles.</div>

          </div>



           <div >


          <img src={obrero} alt="" className='img-empresa'/>
          <div className='area-empresa-describe'>Contamos y desarrollamos software, además de aplicar metodologías adecuadas, para crear soluciones a la medida de las necesidades de nuestros clientes.</div>

           </div>


          </div>



  
    </div>
  );
};

export default Empresa;