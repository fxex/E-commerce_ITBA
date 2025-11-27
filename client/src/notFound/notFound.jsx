import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/notFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="nf-wrapper">
      <div className="nf-card">
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">Página no encontrada</h2>
        <p className="nf-text">
          La página que estás buscando no existe, fue movida o el enlace es incorrecto.
        </p>

        <button className="nf-button" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default NotFound;
