import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CrearProducto.css";
import { URL } from "../../utils/url";

function CrearProducto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagenURL: "",
    materiales: "",
    tamaño: "",
  });

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
      const res = await fetch(`${URL}/productos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Redirigir al catálogo o al nuevo producto
        navigate(`/productos`);
      } else {
        console.error("Error al crear producto:", data.message);
        alert("Error al crear el producto");
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
        <button type="submit">Crear producto</button>
      </form>
    </div>
  );
}

export default CrearProducto;
