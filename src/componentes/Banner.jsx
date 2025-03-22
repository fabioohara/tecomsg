import inicio from "../assets/inicio.jpg";


const Banner = () => {
 
 
  return (
    <div className="banner">
     
     <div className="shadow">
                  <h1>Transformamos la innovación en <span>soluciones reales</span></h1>
                  <p>En TECOM, lideramos el desarrollo de redes FTTH, gestión catastral y optimización tributaria con tecnología de vanguardia</p>
                  
                  <a href='/nosotros' > <div className="div-rounded-banner">Conócenos &nbsp;{" >"}</div></a>
                
                </div>  
            
                <img
                  className="banner-img"
                  src={inicio}
                  
                />
 

               
               


            
         
      
      
    </div>
  );
};

export default Banner;
