
import React from 'react'
import logo2 from '../assets/logo2.svg'

const Footer = () => {
  const destinoNombre = "TECOM Soluciones Tecnológicas";

const handleOpenMaps = () => {
  const destinoCodificado = encodeURIComponent(destinoNombre);
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${destinoCodificado}&travelmode=driving`, '_blank');
};
 return (
     <div className="footer">
     <div className='flexible'>
     <img src={logo2} width={270} alt="" />
     <div className='flexible2' onClick={handleOpenMaps}>
     <span className="material-icons">place</span>
     <p>  Av. la Encalada Nro. 1390 - Surco</p>
     </div>
     </div>
    
       <ul className="menuFooter" >
    <li><a href="/telecomunicaciones">Telecomunicaciones</a></li>
    <li><a href="/catastro">Catastro - Impuesto Predial</a></li>
    <li><a href="/software">Software</a></li>
  </ul>

  <ul className="menuFooter" >
    <li><i className="fa fa-phone"></i>&nbsp; 999 710 080</li>
    <li><i className="fa fa-facebook"></i>&nbsp; informes@tecom.com.pe</li>
    <li><i className="fa fa-map-marker"></i>&nbsp; linkedin/tecomsg</li>
   
  </ul>
 
     </div>
   );
}

export default Footer