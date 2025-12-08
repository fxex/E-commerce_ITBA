import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../utils/url";
import "../../styles/ListarUsuarios.css";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${URL}/usuarios`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar usuarios");
        return res.json();
      })
      .then((data) => {
        console.log("Usuarios recibidos:", data);
        setUsuarios(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("No se pudieron cargar los usuarios");
        setLoading(false);
      });
  }, []);
  return (
    <section className="contenedor_usuarios">
      <div className="contenedor_titulo_usuario">
        <h2 className="title">Usuarios</h2>
      </div>

      <div>
        {loading && <p>Cargando usuarios...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <ul className="lista_usuarios">
            {usuarios.map((u) => (
              <li key={u._id} className="usuario_item">
                <p>
                  <strong>Nombre:</strong> {u.username}
                </p>
                <p>
                  <strong>Email:</strong> {u.email}
                </p>
                <p>
                  <strong>Perfil:</strong> {u.perfil}
                </p>
                {currentUser && currentUser.perfil === "Administrador" && (
                  <Link
                    to={`/admin/editar-usuario/${u._id}`}
                    className="boton_lista"
                  >
                    Actualizar
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
