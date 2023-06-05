import React from "react";
import Logo from "../Assets/logoUNIRED.svg";
import WhoAreWe from "../Assets/who-are-we.png";
import Antecedent from "../Assets/antecedent-background.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';

import "./Inicio.css";

const Inicio = () => {
  return (
    <main>
      <section className="hero">
        <img src={Antecedent} alt="Fondo principal" className="hero__background" />
        <div className="hero__content">
          <img src={Logo} alt="Logo de Unired" className="hero__logo" />
          <h1 className="hero__subtitle">Prevención y Atención de Desastres</h1>
        </div>
      </section>

      <section className="about">
        <div className="about__text">
          <h2 className="about__heading">¿Quiénes somos?</h2>
          <p>
            La Red Universitaria para la Prevención y Atención de Desastres
            (Unired) es la unión de los principales sistemas universitarios de
            México que trabaja en la prevención y atención de desastres en
            nuestro país.
          </p>
        </div>
        <img src={WhoAreWe} alt="Quiénes somos" className="about__image" />
      </section>

      <section className="vision">
        <div className="vision__item">
          <div className="vision__header">
            <FontAwesomeIcon icon={faFlagCheckered} className="vision__icon" />
            <h2 className="vision__heading">Misión</h2>
          </div>
          <p>Coordinar acciones universitarias para prevenir y responder ante desastres en México.</p>
        </div>
        <div className="vision__item">
          <div className="vision__header">
            <FontAwesomeIcon icon={faBullseye} className="vision__icon" />
            <h2 className="vision__heading">Objetivo</h2>
          </div>
          <p>Fomentar cultura de prevención y atención ante desastres y organizar respuesta adecuada y articulada de la sociedad civil ante su ocurrencia.</p>
        </div>
        <div className="vision__item">
          <div className="vision__header">
            <FontAwesomeIcon icon={faEye} className="vision__icon" />
            <h2 className="vision__heading">Visión</h2>
          </div>
          <p>Ser una red universitaria autosustentable, eficaz y confiable que ayude a la sociedad ante desastres.</p>
        </div>
      </section>


      <section className="antecedent">
        <img src={Antecedent} alt="Antecedentes" className="antecedent__background" />
        <div className="antecedent__content">
          <h2 className="antecedent__title">Antecedentes</h2>
          <p>
            Tras el huracán Paulina en 1997, el Cemefi y la Universidad Loyola
            de Acapulco crearon un grupo para ayudar a la población afectada y,
            posteriormente, formaron la red de universidades para promover la
            prevención de desastres en México.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
