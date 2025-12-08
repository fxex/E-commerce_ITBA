import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/CrearProducto.css";
import { URL } from "../../utils/url";

function EditarProducto() {
  const { id_producto } = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch(`${URL}/productos/${id_producto}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Producto recibido:", data);
        setFormData(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error al cargar el producto:", err));
  }, []);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${URL}/productos/${id_producto}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Redirigir al catálogo o al nuevo producto
        navigate(`/productos/${id_producto}`);
      } else {
        console.error("Error al actualizar producto:", data.message);
        alert("Error al actualizar el producto");
      }
    } catch (err) {
      console.error("Error de red:", err);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="crear_producto_container">
      <h2>Crear nuevo producto</h2>
      <form onSubmit={handleSubmit} className="crear_producto_form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagenURL"
          placeholder="URL de imagen de google"
          value={formData.imagenURL}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="materiales"
          placeholder="Materiales"
          value={formData.materiales}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tamaño"
          placeholder="Tamaño"
          value={formData.tamaño}
          onChange={handleChange}
        />
        <button type="submit">Actualizar producto</button>
      </form>
    </div>
  );
}

export default EditarProducto;
