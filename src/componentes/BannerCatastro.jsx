import catastro from "../assets/servicios/catastro.jpg";


const BannerCatastro = () => {
 
 
  return (
    <>
    <div className="banner">
     
                <div className="shadow">
                  <h1>Gestión Integral Catastral</h1>
                  <p>EOfrecemos servicios especializados en levantamiento catastral urbano y rural. Brindamos soluciones precisas para la valorización de bienes inmuebles y el cálculo del impuesto predial, utilizando herramientas modernas y eficientes.</p>
                  
                
                </div>
             
                <img
                  className="banner-img"
                  src={catastro}
                  
                />


              
            



            
         
      
      
    </div>
   
    </>
  );
};

export default BannerCatastro;
