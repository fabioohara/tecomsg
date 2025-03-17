import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado del menú hamburguesa
  const [openDropdown, setOpenDropdown] = useState(null); // Controla qué dropdown está abierto
  const dropdownRef = useRef(null);

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
          <li className="liSelected"><a href="/">INICIO</a></li>
          <li><a href="#">NOSOTROS</a></li>

          {/* Dropdown SERVICIOS */}
          <li
            className={`dropdown ${openDropdown === "servicios" ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => !isMobile && setOpenDropdown("servicios")}
            onClick={() => handleDropdownToggle("servicios")}
          >
            <a href="#" className="dropdown-toggle">
              SERVICIOS
            </a>
            <ul className="dropdown-menu">
              <li><a href="#">Telecomunicaciones</a></li>
              <li><a href="#">Catastro e Impuesto Predial</a></li>
              <li><a href="#">Software</a></li>
            </ul>
          </li>

          {/* Dropdown SOFTWARE */}
          <li
            className={`dropdown ${openDropdown === "software" ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => !isMobile && setOpenDropdown("software")}
            onClick={() => handleDropdownToggle("software")}
          >
            <a href="#" className="dropdown-toggle">
              SOFTWARE
            </a>
            <ul className="dropdown-menu">
              <li><a href="#">FiberField</a></li>
              <li><a href="#">T* Catastro</a></li>
              <li><a href="#">T* Predial</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className='div-rounded'>CONTACTO</div>
    </div>
  );
};

export default Header;
