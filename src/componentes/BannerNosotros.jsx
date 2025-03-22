import nosotros from "../assets/nosotros/nosotros.jpg";


const BannerNosotros = () => {
 
 
  return (
    <>
    <div className="banner">
     
                <div className="shadow">
                  <h1>Quiénes somos</h1>
                  <p>Desde redes de fibra óptica hasta la gestión de información catastral y tributaria, nuestro enfoque combina precisión técnica son soluciones personalizadas para impulsar el crecimiento de nuestro clientes.</p>
                  

                  <div className="div-rounded-banner"><a href="/contacto" > Contáctanos &nbsp;{" >"}</a></div>
                </div>
               
                <img
                  className="banner-img"
                  src={nosotros}
                  
                />


              
            



            
         
      
      
    </div>
   
    </>
  );
};

export default BannerNosotros;
