import React from 'react'
import logo2 from '../assets/logo2.svg'
const Footer = () => {
 return (
     <div className="footer">
       <img className="logoFooter" src={logo2} alt="" style={{width:'17%'}} />
     
       <ul className="menuFooter" >
    <li><a href="#">Telecomunicaciones</a></li>
    <li><a href="#">Catastro - Impuesto Predial</a></li>
    <li><a href="#">Software</a></li>
    <li><a href="#">Obras Civiles</a></li>
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