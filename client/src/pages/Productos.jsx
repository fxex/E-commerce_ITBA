import React, { useState, useEffect } from 'react'
import "../styles/Productos.css"
import VistaProductos from '../Componentes/VistaProductos'

function Productos({setCarrito}) {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://e-commerce-itba.onrender.com/api/productos")
      .then(res => {
        if (!res.ok) 
          throw new Error("Error al cargar");
        return res.json();
      })
      .then(data => {
        console.log("Productos recibidos:", data);
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar productos:", err);
        setError("No se pudieron cargar los productos");
        setLoading(false);
      });
  }, []);

  return (
    <section className='contenedor_productos'>
        <h2 className='title'>Productos</h2>
        <div>
          {loading && <p>Cargando productos...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <VistaProductos productos={productos} agregarAlCarrito={setCarrito}/>}
        </div>
    </section>
  )
}

export default Productos