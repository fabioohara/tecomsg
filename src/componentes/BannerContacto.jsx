import model3 from "../assets/model3.png";
import Contacto from "./Contacto";


const BannerContacto = () => {
   return (
     <div className="container-contacto">
    <img src={model3} className="contacto-img" alt="" />
 
 <Contacto/>
    
   </div>
   )
};

export default BannerContacto;
