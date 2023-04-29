import "./NavBarHamburger.css";

const NavBarHamburger = ({ isOpen, handleClose }) => {
  if (!isOpen) return <></>;

  return (
    <div className="hamburger-main-container" onClick={handleClose}>
      <div className="hamburger-container" onClick={e => e.stopPropagation()}>
        <div className="hamburger-close-container" onClick={handleClose}>
          <i class="fas fa-times"></i>
        </div>
        <div className="hamburger-elements">
          <a href="/" className="navbar-button">Inicio sesión</a>
          <a href="/">Inicio</a>
          <a href="/">Noticias</a>
          <a href="/">Colaboradores</a>
          <a href="/">Contacto</a>
        </div>
      </div>
    </div>
  );
}

export default NavBarHamburger;
