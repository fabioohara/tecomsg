import React from 'react';

import check from "../assets/iconos/check.svg";
import software from "../assets/servicios/software.jpg";
import software1 from "../assets/servicios/software1.png";
import software2 from "../assets/servicios/software2.png";
import software3 from "../assets/servicios/software3.png";

const Software = () => {


   
  return (
    <>
       <div className="contenedor-software">
    
       
          
           <div className="overlay-software-01">
           <div className='interno-1'>
           <img src={software1} alt="" className='img-empresa'/>
           <div className="overlay-software-1">
           <h1 className='titulo-azul'>Sistema Geográfico más libre</h1>
           <p >TECOM se ha especializado en el desarrollo de softwares en un entorno geográfico y software libre (QGIS), permitiendo bajar los costos. Somos desarrolladores en softwares geográficos comerciales ArcGIS y cualquier sistema alfanumérico.</p>
           </div>
           </div>
         
     </div>
         
       
      
     <div className="overlay-software-02">
     <div className='interno-2'>
          <div className="overlay-software-2">
           
          <h1 className='titulo-azul'>Servicios en diferentes sectores</h1>
          <p >Nuestros principales desarrollos están en las áreas siguientes: Telecomunicaciones, Municipalidades, Gobierno Regionales, Laboratorios, Empresas Públicas, Empresas Petroleras, etc.</p>
          </div>
         
          <img src={software2} alt="" className='img-empresa'/>
          </div>
    </div>
        

    <div className="overlay-software-01">
    <div className='interno-1'>
           <img src={software3} alt="" className='img-empresa'/>
           <div className="overlay-software-1">
           <h1 className='titulo-azul'>Imagen a través de drones</h1>
           <p >Desarrollamos sistemas SIG en software libre y comercial, levantamientos topográficos clásicos y con drones. Mosaico y orto rectificación de imágenes satelitales y edición de planos, mapas en dwg y shp file.</p>
           </div>
           </div>
         
     </div>
       </div>
   
      
    
   
   </>
  );
};

export default Software;