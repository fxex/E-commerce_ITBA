import VistaProductos from "../Componentes/VistaProductos";
import React, { useState, useEffect } from "react";
import fondoHero from "../assets/fondo.jpg";
import { URL } from "../utils/url";
import "../styles/inicio.css";

function Inicio() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <>
      <section className="hero_container">
        <img src={fondoHero} alt="imagen Princial" className="img-hero" />
        <div className="texto-img">
          <h1 className="titulo_principal">Muebleria Hermanos Jota</h1>
          <p className="frase_clave">
            Cada pieza cuenta la historia de manos expertas y materiales nobles
          </p>
        </div>
      </section>

      <section className="productos_container">
        <h2 className="titulo_productos">Productos Destacados</h2>

        {loading && <p>Cargando productos...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <VistaProductos productos={productos} />}
      </section>
    </>
  );
}

export default Inicio;
