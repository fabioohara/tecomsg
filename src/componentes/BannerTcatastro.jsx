import tcatastro from "../assets/servicios/tcatastro.jpg";



const BannerTcatastro = () => {
 
 
  return (
    <>
    <div className="banner">
     
                <div className="shadow">
                  <h1>Moderniza tu Gestión Catastral con T*Catastro</h1>
                  <p>Diseñado para modernizar y centralizar la gestión catastral, permitiendo a municipalidades y entidades gubernamentales administrar datos territoriales con precisión, transparencia y cumplimiento normativo. </p>
                  
                
                </div>
                <div className="banner-imgs">
                <img
                  className="banner-img"
                  src={tcatastro}
                  
                />


                </div>
            



            
         
      
      
    </div>
   
    </>
  );
};

export default BannerTcatastro;
