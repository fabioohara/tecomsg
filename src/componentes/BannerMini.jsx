import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c1 from '../assets/cliente-ahseco.png';
import c2 from '../assets/cliente-calatel.png';
import c3 from '../assets/cliente-carso.png';
import c4 from '../assets/cliente-gobierno-regional.png';

const slides = [
  {
    id: 1,
    image: c1,
    
  },
  {
    id: 2,
    image: c2,
   
  },
  {
    id: 3,
    image: c3,
   
  },
  {
    id: 4,
    image: c4,
    
  },
];

const BannerMini = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: isMobile?1:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'ease-in-out', // 🔹 Suaviza la animación
    arrows: false,
    pauseOnHover: false,
    swipe: false,
  };

  return (
    <>
   
    <div className="banner-mini">
 <>
 <h1>Nuestros Clientes</h1>
      <Slider {...settings} className="slick-slider-mini">
        {slides.map((slide, index) => (
          <div key={slide.id} className="slick-slide-mini">
            <div className="slide-content-mini">
                   <img className="banner-mini-img" src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
          </div>
        ))}
      </Slider>
      </>
    </div>
    </>
  );
};

export default BannerMini;
