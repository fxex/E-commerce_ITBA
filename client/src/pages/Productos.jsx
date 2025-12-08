import React, { useState, useEffect, useContext } from "react";
import "../styles/Productos.css";
import VistaProductos from "../Componentes/VistaProductos";
import { URL } from "../utils/url";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${URL}/productos`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar");
        return res.json();
      })
      .then((data) => {
        console.log("Productos recibidos:", data);
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setError("No se pudieron cargar los productos");
        setLoading(false);
      });
  }, []);

  return (
    <section className="contenedor_productos">
      <div className="contenedor_titulo">
        <h2 className="title">Productos</h2>
        {currentUser && currentUser.perfil === "Administrador" && (
          <Link to="/admin/crear-producto" className="boton_titulo">
            Crear
          </Link>
        )}
      </div>
      <div>
        {loading && <p>Cargando productos...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <VistaProductos productos={productos} />}
      </div>
    </section>
  );
}

export default Productos;
