import software from "../assets/servicios/software.jpg";



const BannerSoftware = () => {
 
 
  return (
    <>
    <div className="banner">
     
                <div className="shadow">
                  <h1>Desarrollo de Soluciones Geográficas</h1>
                  <p>Transformamos datos en conocimiento usando herramientas geoespaciales avanzadas. Nos especializamos en desarrollo de sistemas de información geográfica (SIG), ofreciendo soluciones.</p>
                  
                
                </div>
             
                <img
                  className="banner-img"
                  src={software}
                  
                />

            



            
         
      
      
    </div>
   
    </>
  );
};

export default BannerSoftware;
