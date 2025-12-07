// pages/LoginPage.js
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { URL } from "../utils/url";

const Registrarse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URL}/usuarios/registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    navigate("/login");
  };

  return (
    <div>
      <section className="contenido_principal">
        <h2 className="titulo_contacto">Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="container_formulario">
          <div className="campo_formulario">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo_formulario">
            <label htmlFor="nombre">Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo_formulario">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="botones_formulario">
            <button type="submit" className="boton_formulario">
              Registrarse
            </button>
            <button
              type="button"
              className="boton_formulario"
              onClick={() => navigate("/login")}
            >
              Cancelar
            </button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
    </div>
  );
};

export default Registrarse;
