import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Importar Link y useLocation
import logo from "../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado del menú hamburguesa
  const [openDropdown, setOpenDropdown] = useState(null); // Controla qué dropdown está abierto
  const dropdownRef = useRef(null);
  const location = useLocation(); // Obtener la ruta actual

  // Función para detectar si es móvil
  const isMobile = window.innerWidth <= 992;

  // Función para manejar la apertura y cierre del dropdown
  const handleDropdownToggle = (dropdownName) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    }
  };

  // Cierra el dropdown si se hace clic fuera en dispositivos móviles
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".dropdown-toggle")
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />

      {/* Botón de hamburguesa para dispositivos móviles */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Navbar con estado abierto/cerrado */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul className="menu">
          <li className={location.pathname === "/" ? "liSelected" : ""}><a href="/">INICIO</a></li>
          <li className={location.pathname === "/nosotros"  ? "liSelected" : ""}><a href="/nosotros">NOSOTROS</a></li>

          {/* Dropdown SERVICIOS */}
          <li
            className={`dropdown ${openDropdown === "servicios"  ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => !isMobile && setOpenDropdown("servicios")}
            onClick={() => handleDropdownToggle("servicios")}
          >
          <a href="#" className={["/telecomunicaciones", "/catastro","/software"].includes(location.pathname) ? "liSelected dropdown-toggle" : "dropdown-toggle"}>
  SERVICIOS
</a>
            <ul className="dropdown-menu">
              <li><a href="/telecomunicaciones">Telecomunicaciones</a></li>
              <li><a href="/catastro">Catastro e Impuesto Predial</a></li>
              <li><a href="/software">Software</a></li>
            </ul>
          </li>

          {/* Dropdown SOFTWARE */}
          <li
            className={`dropdown ${openDropdown === "software" ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => !isMobile && setOpenDropdown("software")}
            onClick={() => handleDropdownToggle("software")}
          >
            <a href="#" className={["/fiberfield", "/tcatastro","/tpredial"].includes(location.pathname) ? "liSelected dropdown-toggle" : "dropdown-toggle"}>
  SOFTWARE
</a>
            <ul className="dropdown-menu">
              <li><a href="/fiberfield">FiberField</a></li>
              <li><a href="/tcatastro">T* Catastro</a></li>
              <li><a href="/tpredial">T* Predial</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className='div-rounded'>CONTACTO</div>
    </div>
  );
};

export default Header;
