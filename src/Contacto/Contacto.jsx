import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contáctanos</h2>
        <p>Estamos a tus órdenes para cualquier duda o aclaración.</p>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>Actipan 95, Insurgentes Mixcoac, Benito Juárez, 03920</span>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <span>55 1203 6786</span>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <span>uniredst@cemefi.org</span>
          </li>
        </ul>
        <h2 className="mt-5">¿Cómo colaborar?</h2>
        <ul>
          <li>• Voluntariado</li>
          <li>• Compártenos en redes social</li>
          <li>• Realiza una donación</li>
        </ul>
        <button className="donate-button mt-4">Donar</button>
      </div>
      <form className="contact-form">
        <h2>Escríbenos</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
