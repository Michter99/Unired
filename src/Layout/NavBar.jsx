import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../Assets/logoUNIRED.svg";
import NavBarHamburger from "./NavBarHamburger";
import { auth, signOut } from '../Backend/firebaseConfig';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

function NavBar() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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
          {user && <Link to="/blog">Blog</Link>}
          <Link to="/contacto">Contacto</Link>

          {user ? (
            <button className="navbar-button" onClick={() => signOut(auth)}>
              Cerrar sesión
            </button>
          ) : (
            <button className="navbar-button" onClick={() => signInWithRedirect(auth, googleProvider)}>
              Inicio sesión
            </button>
          )}
        </div>
      </div>

      <NavBarHamburger isOpen={isHamburgerMenuOpen} handleClose={() => setHamburgerMenuOpen(false)} />
    </nav >
  );
}

export default NavBar;
