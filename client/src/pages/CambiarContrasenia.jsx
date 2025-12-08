import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/CambiarContrasenia.css";
import { URL } from "../utils/url";

export default function CambiarContrasenia() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validaciones mínimas necesarias
    if (formData.newPassword !== formData.repeatNewPassword) {
      setError("Las nuevas contraseñas no coinciden");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("La nueva contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      await fetch(`${URL}/usuarios/${currentUser._id}/contrasenia`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(formData),
      });

      navigate("/perfil");
    } catch (err) {
      console.error(err);
      setError("No se pudo cambiar la contraseña");
    }
  };

  return (
    <section className="contenedor_perfil">
      <div className="contenedor_titulo">
        <h2 className="title">Cambiar Contraseña</h2>
      </div>

      <form className="lista_perfil" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <li className="perfil_item">
          <label>
            <strong>Contraseña actual:</strong>
          </label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
          />
        </li>

        <li className="perfil_item">
          <label>
            <strong>Nueva contraseña:</strong>
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </li>

        <li className="perfil_item">
          <label>
            <strong>Repetir nueva contraseña:</strong>
          </label>
          <input
            type="password"
            name="repeatNewPassword"
            value={formData.repeatNewPassword}
            onChange={handleChange}
          />
        </li>

        <li className="perfil_item botones_form">
          <button type="submit" className="boton_edit">
            Actualizar contraseña
          </button>
        </li>
      </form>
    </section>
  );
}
