import "./Layout.css";
import Logo from "../Assets/logoUNIRED.svg";

const Layout = ({ children }) => {
  return (
    <>
      <header>
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
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="footer-container">
          <div className="footer-social">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i class="fab fa-instagram"></i></a>
            <a href="/"><i class="fab fa-twitter"></i></a>
          </div>

          <img
            className="footer-logo"
            src={Logo}
            alt="Logo de Unired"
          />

          <span>© 2023 Unired</span>
        </div>
      </footer>
    </>
  );
}

export default Layout;
