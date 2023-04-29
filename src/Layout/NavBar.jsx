import "./NavBar.css";

import Logo from "../Assets/logoUNIRED.svg";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-container">
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
    </nav>
  );
}

export default NavBar;
