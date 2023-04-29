import { useState } from "react";
import { Link } from "react-router-dom";
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

        <Link to="/">
          <img
            className="navbar-logo"
            src={Logo}
            alt="Logo de Unired"
          />
        </Link>

        <div className="navbar-elements">
          <Link to="/">Inicio</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/colaboradores">Colaboradores</Link>
          <Link to="/contacto">Contacto</Link>
          <a href="/" className="navbar-button">Inicio sesión</a>
        </div>
      </div>

      <NavBarHamburger isOpen={isHamburgerMenuOpen} handleClose={() => setHamburgerMenuOpen(false)} />
    </nav >
  );
}

export default NavBar;
