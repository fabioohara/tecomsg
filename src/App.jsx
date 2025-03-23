import React, { useState, useEffect,useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Ayuda from "./componentes/Ayuda";
import Card1 from "./componentes/Card1";
import BannerMini from "./componentes/BannerMini";
import Agenda from "./componentes/Agenda";
import Footer from "./componentes/Footer";
import SubFooter from "./componentes/SubFooter";
import whatsapp from "./assets/whatsapp.png";
import BannerNosotros from "./componentes/BannerNosotros";
import Empresa2 from "./componentes/Empresa2";
import NuestraEmpresa from "./componentes/NuestraEmpresa";
import BannerTelecom from "./componentes/BannerTelecom";
import Telecom from "./componentes/Telecom";
import Telecom2 from "./componentes/Telecom2";
import Agenda2 from "./componentes/Agenda2";
import Catastro from "./componentes/Catastro";
import BannerCatastro from "./componentes/BannerCatastro";
import BannerSoftware from "./componentes/BannerSoftware";
import Software from "./componentes/Software";
import BannerFiberfield from "./componentes/BannerFiberfield";
import Fiberfield from "./componentes/Fiberfield";
import BannerTcatastro from "./componentes/BannerTcatastro";
import Tcatastro from "./componentes/Tcatastro";
import BannerTpredial from "./componentes/BannerTpredial";
import Tpredial from "./componentes/Tpredial";
import BannerContacto from "./componentes/BannerContacto";


function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
    

      setShow(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // ✅ Se ejecuta una sola vez al montar el componente

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Ayuda />
              <Card1 />
              <BannerMini />
             
              <Agenda />
            </>
          }
        />

<Route
          path="/nosotros"
          element={
            <>
              <BannerNosotros />
              <NuestraEmpresa/>
              <Empresa2 />
             <BannerMini />
            </>
          }
        />

<Route
          path="/telecomunicaciones"
          element={
            <>
              <BannerTelecom />
              <Telecom/>
              <Telecom2 />
              <Agenda />
            </>
          }
        />

<Route
          path="/catastro"
          element={
            <>
              <BannerCatastro />
              <Catastro/>
              <Agenda />
            </>
          }
        />

        

<Route
          path="/software"
          element={
            <>
              <BannerSoftware />
              <Software/>
              <Agenda />
            </>
          }
        />

<Route
          path="/fiberfield"
          element={
            <>
              <BannerFiberfield />
              <Fiberfield />
              <Agenda />

            </>
          }
        />

<Route
          path="/tcatastro"
          element={
            <>
              <BannerTcatastro />
              <Tcatastro />
              <Agenda />

            </>
          }
        />

<Route
          path="/tpredial"
          element={
            <>
              <BannerTpredial />
              <Tpredial />
              <Agenda />

            </>
          }
        />

<Route
          path="/contacto"
          element={
            <>
              <BannerContacto />
             

            </>
          }
        />

      </Routes>
    
    
      <Footer/>
      <SubFooter />

      {/* Ícono de WhatsApp */}
      <a
        href={`https://wa.me/51990081302?text=Hola,%20quiero%20enviar%20una%20consulta%20desde%20su%20Sitio%20Web`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
        style={{
          position: "fixed",
          bottom: "15px",
          right: "20px",
          zIndex: "2000",
        }}
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>

      {/* Botón de volver arriba */}
      {show && (
        <button
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: "3000",
            padding: "10px",
            backgroundColor: "rgba(100,100,100,0.6)",
            borderRadius:"10%",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight:"bolder",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >↑</button>
      )}
    </>
  );
}
  
export default App;
