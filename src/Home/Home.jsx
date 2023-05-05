import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import Inicio from "../Inicio/Inicio";
import Noticias from "../Noticias/Noticias";
import Colaboradores from "../Colaboradores/Colaboradores";
import Contacto from "../Contacto/Contacto";
import Footer from "../Layout/Footer";

function Home() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Home;
