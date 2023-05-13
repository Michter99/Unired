import React from "react";
import "./Colaboradores.css";

const Colaborador = ({ linkImagen, nombre, descripcion, showBack, onToggle }) => {
    return (
        <div className="card-container">
            <div className={`card ${showBack ? "show-back" : ""}`}>
                <div className="card-front">
                    <img src={linkImagen} alt={nombre} className="card-img" />
                    <div className="card-name">{nombre}</div>
                </div>
                <div className="card-back">
                    <div className="card-text">{descripcion}</div>
                </div>
            </div>
            <button className="toggle-button" onClick={onToggle}>
                {showBack ? "" : "Saber más"}
            </button>
        </div>
    );
};

export default Colaborador;
