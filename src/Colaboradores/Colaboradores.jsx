import { Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import Colaborador from "./Colaborador";
import hormigas from "../Assets/colaboradores-tec.png";
import lobos from "../Assets/colaboradores-ibero.png";
import asua from "../Assets/colaboradores-anahuac.png";
import bUp from "../Assets/colaboradores-up.png";

const Colaboradores = () => {
    const [activeCard, setActiveCard] = useState(null);
    const colaboradores = [
        { imgSrc: hormigas, name: "Hormigas del Instituto Tecnológico de Monterrey", description: "Hormigas se ve como un grupo estudiantil de liderazgo con presencia oficial en varios campi del Sistema ITESM, en los cuales se realicen proyectos sociales sustentables, se brinda capacitación de primeros auxilios y protección civil a la comunidad en general." },
        { imgSrc: lobos, name: "Lobos Ibero de la Universidad Iberoamericana", description: "Lobos Ibero es una asociación estudiantil conformada por estudiantes y empleados que operan con cierta autonomía dentro y fuera de la Universidad, bajo los estatutos y el apoyo de la oficina de atención de alumnos de la UIA, enfocados a prevenir y atender desastres naturales." },
        { imgSrc: asua, name: "Comité Estudiantil ASUA de la Universidad Anáhuac", description: "ASUA busca fomentar entre la comunidad universitaria el desarrollo de una conciencia social, sustentada en los valores universales que promueve el humanismo cristiano, impulsando su liderazgo y servicio al prójimo." },
        { imgSrc: bUp, name: "B-UP de la Universidad Panamericana", description: "Brigadas UP busca capacitar a los alumnos de la Universidad Panamericana para que estén preparados y puedan actuar frente a cualquier desastre que se pueda presentar en cualquier momento y lugar. Buscando formar vínculos con expertos de los temas para profesionalizar sus actividades." },
    ];

    const handleToggle = (index) => {
        setActiveCard(index === activeCard ? null : index);
    };

    return (
        <div className="container mt-5 main-container-colab">
            <h1>Colaboradores</h1>
            <Row xs={1} sm={1} md={2} lg={3}>
                {colaboradores.map((card, index) => (
                    <Col className="mb-5" key={index}>
                        <Colaborador
                            {...card}
                            showBack={index === activeCard}
                            onToggle={() => handleToggle(index)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Colaboradores;
