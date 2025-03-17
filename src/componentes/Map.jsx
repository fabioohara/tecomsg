import React from 'react'
import map from '../assets/map.jpg'
import mapa2 from '../assets/mapa2.png'


const Map = () => {

    const destinoLat = -12.127110;  // Latitud destino
    const destinoLng =  -77.0240204;  // Longitud destino
    
    const handleOpenMaps = () => {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${destinoLat},${destinoLng}&travelmode=driving`, '_blank');
    };


  return (
    <div class="container-rounded">
   

    <img className="left-image2" src={map} alt="Descripción de la imagen" onClick={handleOpenMaps} />

    <div class="text-contentR2">
        <br/>
      <h1>Visítanos</h1>
   
      <p>
      En nuesta oficina de Miraflores
      </p>
    
     
      <p className='p-movil'>
      En nuesta oficina de Miraflores, Lima - Perú
      </p>
      <div className='map-movil'>
      <i className="fa fa-map-marker" style={{color:'#d52c31', fontSize:'3rem'}}></i>
      <p className='p-movil-loc'>
      Avenida Reducto 861, Of. 303, Miraflores, Lima - Perú
      </p>
</div>
      <img className="left-image3" src={mapa2} alt="Descripción de la imagen" />
    </div>
  
  </div>
  )
}

export default Map