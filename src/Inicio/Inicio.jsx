import React from "react";
import Logo from "../Assets/logoUNIRED.svg";
import Fondo from "../Assets/main-background.png";
import Darker from "../Assets/dark-rectangle.png";
import WhoAreWe from "../Assets/who-are-we.png";
import Antecedent from "../Assets/antecedent-background.png";
import MissionLogo from "../Assets/mountain.png";
import ObjectiveLogo from "../Assets/target.png";
import VisionLogo from "../Assets/open-eye.png";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className='start-main'>
        <img
          className='start-main-background'
          src={Fondo}
          alt='Fondo principal'
        />
        <img className='dark-background' src={Darker} alt='Fondo principal' />
        <div className='start-main-title'>
          <img className='start-main-logo' src={Logo} alt='Logo de Unired' />
          <h1 className='start-main-subtitle'>
            Prevención y Atención de Desastres
          </h1>
        </div>
      </div>

      <div className='white-background'>
        <div className='who-are-we-container'>
          <div className='who-are-we-text'>
            <h1 className='orange-title'>¿Quiénes somos?</h1>
            <p className='description'>
              La Red Universitaria para la Prevención y Atención de Desastres
              (Unired) es la unión de los principales sistemas universitarios de
              México que trabaja en la prevención y atención de desastres en
              nuestro país.
            </p>
          </div>
          <img
            className='who-are-we-image'
            src={WhoAreWe}
            alt='Quiénes somos'
          />
        </div>
      </div>

      <div className='purplish-background'>
        <div className='mov-container'>
          <div className='item-container'>
            <img className='item-logo' src={MissionLogo} alt='Logo misión' />
            <h1 className='orange-title'>Misión</h1>
            <p className='item-description'>
              Coordinar acciones universitarias para prevenir y responder ante
              desastres en México
            </p>
          </div>
          <div className='item-container'>
            <img
              className='item-logo'
              src={ObjectiveLogo}
              alt='Logo objetivo'
            />
            <h1 className='orange-title'>Objetivo</h1>
            <p className='item-description'>
              Fomentar cultura de prevención y atención ante desastres y
              organizar respuesta adecuada y articulada de la sociedad civil
              ante su ocurrencia.
            </p>
          </div>
          <div className='item-container'>
            <img className='item-logo' src={VisionLogo} alt='Logo visión' />
            <h1 className='orange-title'>Visión</h1>
            <p className='item-description'>
              Ser una red universitaria autosustentable, eficaz y confiable que
              ayude a la sociedad ante desastres.
            </p>
          </div>
        </div>
      </div>

      <div className='antecedent'>
        <img
          className='antecedent-background'
          src={Antecedent}
          alt='Antecedentes'
        />
        <div className='antecedent-container'>
          <h1 className='antecedent-title'>Antecedentes</h1>
          <p className='antecendent-description'>
            Tras el huracán Paulina en 1997, el Cemefi y la Universidad Loyola
            de Acapulco crearon un grupo para ayudar a la población afectada y,
            posteriormente, formaron la red de universidades para promover la
            prevención de desastres y ayudar a las poblaciones afectadas por
            desastres naturales o provocados por el ser humano.
          </p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
