import React, { useState, useEffect } from "react";
import inicio from "../assets/inicio.jpg";


const Banner = () => {
 
 
  return (
    <div className="banner">
     
                <div className="shadow">
                  <h1>Transformamos la innovación en <span>soluciones reales</span></h1>
                  <p>En TECOM, lideramos el desarrollo de redes FTTH, gestión catastral y optimización tributaria con tecnología de vanguardia</p>
                  
                 <br/> <div className="div-rounded-banner">Conócenos &nbsp;{" >"}</div>
                </div>
                <div className="banner-imgs">
                <img
                  className="banner-img"
                  src={inicio}
                  
                />


                </div>
               


            
         
      
      
    </div>
  );
};

export default Banner;
