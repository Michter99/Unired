import { useState, useEffect } from "react";
import "./NavBarHamburger.css";
import { Link } from "react-router-dom";
import { auth, signOut } from '../Backend/firebaseConfig';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const NavBarHamburger = ({ isOpen, handleClose }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {

    const validDomains = ['up.edu.mx', 'tec.mx'];
    const adminEmail = 'presidenciaunired@gmail.com';

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const emailDomain = user.email.split('@')[1];

        if (validDomains.includes(emailDomain) || user.email === adminEmail) {
          setUser(user);
        } else {
          signOut(auth);
          alert('Lo sentimos, solo los usuarios con ciertos dominios pueden iniciar sesión.');
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={`hamburger-main-container${isOpen ? " open" : ""}`} onClick={handleClose}>
      <div className={`hamburger-container${isOpen ? " open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="hamburger-close-container" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </div>
        <div className="mt-5 hamburger-elements">
          {user ? (
            <button className="navbar-button" onClick={() => {
              signOut(auth);
              handleClose();
            }}>
              Cerrar sesión
            </button>
          ) : (
            <button className="navbar-button" onClick={() => signInWithRedirect(auth, googleProvider)}>
              Inicio sesión
            </button>
          )}
          <Link onClick={handleClose} to="/">
            Inicio
          </Link>
          <Link onClick={handleClose} to="/noticias">
            Noticias
          </Link>
          <Link onClick={handleClose} to="/colaboradores">
            Colaboradores
          </Link>
          {user && (
            <Link onClick={handleClose} to="/blog">
              Blog
            </Link>
          )}
          <Link onClick={handleClose} to="/contacto">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarHamburger;
