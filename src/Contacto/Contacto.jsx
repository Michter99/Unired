import React from "react";
import "./Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="titulo-container">
        <h1>Contacto</h1>
      </div>
      <div className="info-container">
        <div className="contactInfo-container">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="2xl"
            style={{ color: "#f5802a" }}
          />
          <p>Cerrada Salvador Álvarado #7, Col. Escandón, C.P. 11800</p>
        </div>
        <div className="contactInfo-container">
          <FontAwesomeIcon
            icon={faPhone}
            size="2xl"
            style={{ color: "#f5762b" }}
          />
          <p>55 1203 6786</p>
        </div>
        <div className="contactInfo-container">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2xl"
            style={{ color: "#f5762b" }}
          />
          <p>uniredst@cemefi.org</p>
        </div>
      </div>
      <div className="colaborar-container">
        <h1>¿Cómo colaborar?</h1>
        <ul>
          <li>Voluntariado</li>
          <li>Compártenos en redes sociales</li>
          <li>Realiza una donación</li>
        </ul>
        <div className="div-boton">
          <input
            className="contacto-button"
            type="button"
            value="Donar"
            id="donar-button"
          ></input>
        </div>
      </div>
      <div className="formulario-container">
        <h1>¿Te interesa saber más?</h1>
        <p>Escríbenos y con gusto nos pondremos en contacto contigo</p>
        <form className="form-container">
          <div className="formRow-container">
            <input type="text" placeholder="Nombre" required></input>
            <input type="text" placeholder="Correo" required></input>
          </div>
          <input type="text" placeholder="Asunto" required></input>
          <textarea placeholder="Mensaje" required rows={10}></textarea>
          <button className="contacto-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
