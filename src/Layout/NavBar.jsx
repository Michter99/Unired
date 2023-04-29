import { useState } from "react";

import "./NavBar.css";
import Logo from "../Assets/logoUNIRED.svg";
import NavBarHamburger from "./NavBarHamburger";

function NavBar() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <nav>
      <div className="navbar-container">
        <div
          className="navbar-hamburger-icon"
          onClick={() => setHamburgerMenuOpen(true)}
        >
          <i className="fas fa-bars"></i>
        </div>

        <img
          className="navbar-logo"
          src={Logo}
          alt="Logo de Unired"
        />

        <div className="navbar-elements">
          <a href="/">Inicio</a>
          <a href="/">Noticias</a>
          <a href="/">Colaboradores</a>
          <a href="/">Contacto</a>
          <a href="/" className="navbar-button">Inicio sesión</a>
        </div>
      </div>

      <NavBarHamburger isOpen={isHamburgerMenuOpen} handleClose={() => setHamburgerMenuOpen(false)} />
    </nav>
  );
}

export default NavBar;
