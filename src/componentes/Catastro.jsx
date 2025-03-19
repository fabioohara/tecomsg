import React from 'react';

import check from "../assets/iconos/check.svg";
import catastro from "../assets/servicios/catastro.png";

import catastro1 from "../assets/servicios/catastro1.png";
import catastro2 from "../assets/servicios/catastro2.png";
const Catastro = () => {


   
  return (
    <>
       <div className="contenedor-servicios">
   
       
          
           <div className="overlay4">
          
           <div className="overlay55">
           <h1 className='titulo-azul'>Creación de redes</h1>
           <p >Levantamiento, diseño, ingeniería, construcción, mantenimiento, supervisión de una red de fibra óptica, FTTH y HFC. Todo tipo de obras civiles dentro de las redes de fibra óptica, cableado estructurado e instalaciones de acometida a cliente final</p>
           </div>
           <img src={catastro1} alt="" className='img-empresa'/>
     </div>
         
       
      
         <div className="overlay44">
       
         <div className="overlay6">
         <div className="item2">
          
          <div className='ventajas'>
          <img src={check} className="img-ventaja" alt="" />
          <div>
          <h3>Levantamiento Catastral </h3>
          <p>Mapeo detallado y exacto de predios urbanos y rurales.</p>
          </div>
        </div> 
        
        <div className='ventajas'>
          <img src={check}  className="img-ventaja" alt="" />
          <div>
          <h3>Saneamiento Físico y Legal</h3>
          <p>Regularización de propiedades, garantizando seguridad jurídica.</p>
          </div> 
          </div> 
        
          <div className='ventajas'>
          <img src={check}  className="img-ventaja" alt="" />
          <div>
          <h3>Gestión Espacial de Predios</h3>
          <p>Manejo eficiente y preciso de información geoespacial.</p>
          </div> 
          </div> 
        
           
          </div>
         </div>
        
          </div>
        
       </div>
   
      
    
       <div className="demos">
       <h1 >Mira Nuestros Demos</h1>
       <div  className="demo1" >
           <div  className="demo2" >
             <img src={catastro} alt="" />
             <div className="empresa-item" >
             <div className="button-blue">
              T*Catastro {'>'}
             </div>
             </div>
            
            
          
             </div>
   
             <div  className="demo2" >
             <img src={catastro2} alt="" />
             <div className="empresa-item" >
             <div className="button-blue">
              App T*Catastro {'>'}
             </div>
             </div>
            
            
          
             </div>
           
        </div>
       </div> 
   
   </>
  );
};

export default Catastro;