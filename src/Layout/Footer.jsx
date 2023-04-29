import "./Footer.css";

import Logo from "../Assets/logoUNIRED.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
        </div>

        <img
          className="footer-logo"
          src={Logo}
          alt="Logo de Unired"
        />

        <span>© 2023 Unired</span>
      </div>
    </footer>
  );
}

export default Footer;
