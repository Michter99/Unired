import React from "react";
import hormigas from "../Assets/colaboradores-tec.png";
import lobos from "../Assets/colaboradores-ibero.png";
import asua from "../Assets/colaboradores-anahuac.png";
import bUp from "../Assets/colaboradores-up.png";
import "./Colaboradores.css";
import Footer from "../Layout/Footer";
// import "./Login.css";

const Colaboradores = () => {
    return (
        <>
        <div className='colaboradores'>
            <h1 className='orange-font'>Colaboradores</h1>

            <img className = 'img1-style'src={hormigas} alt='hormigas-tec'/>
            <img className = 'img2-style'src={lobos} alt='lobos-ibero'/>
            <img className = 'img3-style'src={asua} alt='asua-anahuac'/>
            <img className = 'img4-style'src={bUp} alt='build-up'/>
            <div className='container1'>
            <p className='title1'>
            Hormigas del Instituto Tecnológico de Monterrey
            </p>
            <p className='description1'>
            Hormigas se ve como un grupo estudiantil de liderazgo con
            presencia oficial en varios campi del Sistema Instituto
            Tecnológico y de Estudios Superiores de Monterrey, en los
            cuales se realicen proyectos sociales sustentables, se
            brinda capacitación de primeros auxilios y protección civil
            a la comunidad en general.
            </p>
            </div>
            <div className='container2'>
            <p className='title2'>
            Lobos Ibero de la Universidad Iberoamericana
            </p>
            <p className='description2'>
            Brigada Lobos Ibero es una asociación estudiantil conformada
            por estudiantes y empleados que operan con cierta autonomía
            dentro y fuera de la Universidad, bajo los estatutos y el apoyo
            de la oficina de atención de alumnos (COPSA) de la UIA, enfocados
            a prevenir y atender desastres naturales.
            </p>
            </div>
            <div className='container3'>
            <p className='title3'>
            Comité Estudiantil ASUA de la Universidad Anáhuac
            </p>
            <p className='description3'>
            ASUA es el organismo estudiantil de la Universidad Anáhuac que
            depende de la coordinación de Compromiso Social. Es responsable
            de fomentar entre la comunidad universitaria el desarrollo de una
            conciencia social, sustentada en los valores universales que
            promueve el humanismo cristiano, impulsando su liderazgo y
            servicio al prójimo.
            </p>
            </div>
            <div className='container4'>
            <p className='title4'>
            B-UP de la Universidad Panamericana
            </p>
            <p className='description4'>
            Brigadas UP busca capacitar a los alumnos de la Universidad
            Panamericana para que estén preparados y puedan actuar frente
            a cualquier desastre que se pueda presentar en cualquier momento
            y lugar. Buscando formar vínculos con expertos de los temas para
            profesionalizar sus actividades.
            </p>
            </div>
        </div>
            <Footer/>
        </>
        
    );
};

export default Colaboradores;