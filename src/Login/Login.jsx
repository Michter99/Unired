import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="main-container" id="container">
            <div className="form-container sign-in-container">
                <form id="login" action="#">
                    <img
                        src={require("../Assets/logoUNIRED.svg").default}
                        alt="logo"
                        className="sence-logo"
                    />
                    <h3>Prevención y Atención de Desastres</h3>
                    <button>
                        Iniciar sesión
                    </button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h2>¡Bienvenido!</h2>
                        <h4>Accede con tu cuenta de Google</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;