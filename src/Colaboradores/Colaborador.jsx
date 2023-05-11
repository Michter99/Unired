import React from "react";
import "./Colaboradores.css";

const Colaborador = ({ imgSrc, name, description, showBack, onToggle }) => {
    return (
        <div className="card-container">
            <div className={`card ${showBack ? "show-back" : ""}`}>
                <div className="card-front">
                    <img src={imgSrc} alt={name} className="card-img" />
                    <div className="card-name">{name}</div>
                </div>
                <div className="card-back">
                    <div className="card-text">{description}</div>
                </div>
            </div>
            <button className="toggle-button" onClick={onToggle}>
                {showBack ? "" : "Saber más"}
            </button>
        </div>
    );
};

export default Colaborador;
