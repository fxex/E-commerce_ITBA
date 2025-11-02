import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProductoDetail.css";

function ProductDetail({ setCarrito }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://e-commerce-itba.onrender.com/api/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Producto recibido:", data);
        setProducto(data);
      })
      .catch((err) => console.error("Error al cargar el producto:", err));
  }, [id]);

  if (!producto) {
    return <p className="ProductDetail_text">Cargando producto...</p>;
  }

  const { nombre, precio, imagenURL, descripcion, materiales, tamaño } = producto;

  const handleDelete = async () => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este producto?");
    if (!confirmar) return;

    try {
      const res = await fetch(`https://e-commerce-itba.onrender.com/api/productos/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Producto eliminado correctamente");
        navigate("/productos");
      } else {
        const data = await res.json();
        console.error("Error al eliminar:", data.message);
        alert("No se pudo eliminar el producto");
      }
    } catch (err) {
      console.error("Error de red:", err);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="ProductDetail_Container">
      <img
        src={`https://e-commerce-itba.onrender.com/api${encodeURI(imagenURL)}`}
        alt={nombre}
        className="ProductDetail_img"
      />
      <h2 className="ProductDetail_title">{nombre}</h2>
      <h3 className="ProductDetail_precio">${precio}</h3>
      <p className="ProductDetail_text">{descripcion}</p>
      <p className="ProductDetail_text">Materiales: {materiales}</p>
      <p className="ProductDetail_text">Tamaño: {tamaño}</p>
      <button
        className="ProductDetail_boton"
        onClick={() => setCarrito((prev) => [...prev, producto])}
      >
        Añadir al carrito
      </button>
      <button
        className="ProductDetail_boton"
        onClick={handleDelete}
        style={{ backgroundColor: "#c0392b", marginTop: "1rem" }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default ProductDetail;
