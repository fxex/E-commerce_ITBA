import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { URL } from "../../utils/url";
import "../../styles/EditarUsuario.css";

export default function EditarUsuario() {
  const { id_usuario } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [perfil, setPerfil] = useState("Usuario Estandar");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar datos del usuario
  useEffect(() => {
    fetch(`${URL}/usuarios/${id_usuario}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar usuario");
        return res.json();
      })
      .then((data) => {
        setUsername(data.username);
        setEmail(data.email);
        setPerfil(data.perfil);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("No se pudieron cargar los datos del usuario");
        setLoading(false);
      });
  }, [id_usuario]);

  // Envío actualización
  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioActualizado = {
      username,
      email,
      perfil,
    };

    fetch(`${URL}/usuarios/${id_usuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(usuarioActualizado),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al actualizar usuario");
        return res.json();
      })
      .then(() => {
        navigate("/admin/lista-usuarios");
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("No se pudo actualizar el usuario");
      });
  };

  return (
    <section className="contenedor_editar_usuario">
      <h2 className="title">Editar Usuario</h2>

      {loading && <p>Cargando datos...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <form className="form_editar_usuario" onSubmit={handleSubmit}>
          {/* Nombre */}
          <label>
            Nombre de usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          {/* Email */}
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {/* Perfil */}
          <div className="contenedor_perfil_radio">
            <p>
              <strong>Perfil:</strong>
            </p>

            <label className="radio_label">
              <input
                type="radio"
                name="perfil"
                value="Administrador"
                checked={perfil === "Administrador"}
                onChange={(e) => setPerfil(e.target.value)}
              />
              Administrador
            </label>

            <label className="radio_label">
              <input
                type="radio"
                name="perfil"
                value="usuario estandar"
                checked={perfil === "usuario estandar"}
                onChange={(e) => setPerfil(e.target.value)}
              />
              Usuario estándar
            </label>
          </div>

          <button type="submit" className="boton_guardar">
            Guardar cambios
          </button>
        </form>
      )}
    </section>
  );
}
