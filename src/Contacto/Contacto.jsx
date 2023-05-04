import React from "react";
import "./Contacto.css";

const Contacto = () => {
    return (
        <div className="contacto-container">
            <div>
                <h1>Contacto</h1>
            </div>
            <div className="info-container">
                <h1>Información de contacto</h1>
            </div>
            <div className="colaborar-container">
                <h1>¿Cómo colaborar?</h1>
                <ul>
                    <li>Voluntariado</li>
                    <li>Compártenos en redes sociales</li>
                    <li>Realiza una donación</li>
                </ul>
                <button className="btn-primary">Donar</button>
            </div>
            <div className="formulario-container">
                <h1>¿Te interesa saber más?</h1>
                <p>Escríbenos y con gusto nos pondremos en contacto contigo</p>
                <form>
                    <div>
                        <input type="text" placeholder="Nombre" required></input>
                        <input type="text" placeholder="Correo" required></input>
                    </div>
                    <input type="text" placeholder="Asunto" required></input>
                    <input type="text" placeholder="Mensaje" required></input>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    );
    /*return (
        <>
            <h1>Contacto page</h1>
        </>
    );*/
};

export default Contacto;