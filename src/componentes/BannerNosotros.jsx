import nosotros from "../assets/nosotros/nosotros.jpg";


const BannerNosotros = () => {
 
 
  return (
    <>
    <div className="banner">
     
                <div className="shadow">
                  <h1>Quiénes somos</h1>
                  <p>Desde redes de fibra óptica hasta la gestión de información catastral y tributaria, nuestro enfoque combina precisión técnica son soluciones personalizadas para impulsar el crecimiento de nuestro clientes.</p>
                  
                 <br/> <div className="div-rounded-banner">Contáctanos &nbsp;{" >"}</div>
                </div>
                <div className="banner-imgs">
                <img
                  className="banner-img-0"
                  src={nosotros}
                  
                />


                </div>
            



            
         
      
      
    </div>
   
    </>
  );
};

export default BannerNosotros;
