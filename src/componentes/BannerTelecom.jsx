import tele from "../assets/servicios/tele.jpg";


const BannerTelecom = () => {
 
 
  return (
    <>
    <div className="banner">
     
                <div className="shadow">
                  <h1>Soluciones Integrales en Telecomunicaciones</h1>
                  <p>Desde el diseño hasta el mantenimiento, brindamos servicios completos en redes de fibra ópitca, cableado estructurado y redes móviles.</p>
                  
                
                </div>
                <div className="banner-imgs">
                <img
                  className="banner-img"
                  src={tele}
                  
                />


                </div>
            



            
         
      
      
    </div>
   
    </>
  );
};

export default BannerTelecom;
