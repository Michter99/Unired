import "./NavBarHamburger.css";
import { Link } from "react-router-dom";

const NavBarHamburger = ({ isOpen, handleClose }) => {
  return (
    <div className={`hamburger-main-container${isOpen ? " open" : ""}`} onClick={handleClose}>
      <div className={`hamburger-container${isOpen ? " open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="hamburger-close-container" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </div>
        <div className="mt-5 hamburger-elements">
          <Link onClick={handleClose} to="/" className="navbar-button">
            Inicio sesión
          </Link>
          <Link onClick={handleClose} to="/">
            Inicio
          </Link>
          <Link onClick={handleClose} to="/noticias">
            Noticias
          </Link>
          <Link onClick={handleClose} to="/colaboradores">
            Colaboradores
          </Link>
          <Link onClick={handleClose} to="/contacto">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarHamburger;
