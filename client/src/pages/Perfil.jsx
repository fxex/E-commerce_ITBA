import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Perfil.css";

export default function Perfil() {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="contenedor_perfil">
      <div className="contenedor_titulo">
        <h2 className="title">Mi Perfil</h2>
      </div>

      <ul className="lista_perfil">
        <li className="perfil_item">
          <p>
            <strong>Nombre:</strong> {currentUser.username}
          </p>
        </li>

        <li className="perfil_item">
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
        </li>

        <li className="perfil_item contrasenia_item">
          <p>
            <strong>Contraseña:</strong> ************
          </p>
        </li>

        <li className="perfil_item">
          <p>
            <strong>Perfil:</strong> {currentUser.perfil}
          </p>
        </li>
        <li className="perfil_item">
          <Link to="/editar-perfil" className="boton_edit">
            Editar
          </Link>
        </li>
      </ul>
    </section>
  );
}
