import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { URL } from "../utils/url";
import "../styles/EditarPerfil.css";

export default function EditarPerfil() {
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  // Estado local editable
  const [formData, setFormData] = useState({
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    perfil: currentUser?.perfil || "",
  });

  // Manejo de cambios
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit de actualización
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      fetch(`${URL}/usuarios/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Error al actualizar usuario");
          return res.json();
        })
        .then(() => {
          logout();
          navigate("/login");
        })
        .catch((err) => {
          console.error("Error:", err);
          setError("No se pudo actualizar el usuario");
        });
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("No se pudo actualizar el perfil");
    }
  };

  return (
    <section className="contenedor_perfil">
      <div className="contenedor_titulo">
        <h2 className="title">Editar Perfil</h2>
      </div>

      <form className="lista_perfil" onSubmit={handleSubmit}>
        <li className="perfil_item">
          <label>
            <strong>Nombre:</strong>
          </label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </li>

        <li className="perfil_item">
          <label>
            <strong>Email:</strong>
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </li>

        <li className="perfil_item">
          <strong>Contraseña:</strong>{" "}
          <Link to="/cambiar-contrasenia" className="boton_edit">
            Cambiar contraseña
          </Link>
        </li>

        <li className="perfil_item botones_form">
          <button type="submit" className="boton_edit">
            Guardar cambios
          </button>
        </li>
      </form>
    </section>
  );
}
