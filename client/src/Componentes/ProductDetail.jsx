import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/ProductoDetail.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { URL } from "../utils/url";
import { AuthContext } from "../context/AuthContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const { agregar_producto } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${URL}/productos/${id}`)
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

  const { nombre, precio, imagenURL, descripcion, materiales, tamaño } =
    producto;

  const handleDelete = async () => {
    const confirmar = window.confirm(
      "¿Estás seguro de que querés eliminar este producto?"
    );
    if (!confirmar) return;

    try {
      const res = await fetch(`${URL}/productos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
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
      <img src={imagenURL} alt={nombre} className="ProductDetail_img" />
      <h2 className="ProductDetail_title">{nombre}</h2>
      <h3 className="ProductDetail_precio">${precio}</h3>
      <p className="ProductDetail_text">{descripcion}</p>
      {materiales && (
        <p className="ProductDetail_text">Materiales: {materiales}</p>
      )}
      {tamaño && <p className="ProductDetail_text">Tamaño: {tamaño}</p>}
      {currentUser && currentUser.perfil !== "Administrador" && (
        <button
          className="ProductDetail_boton"
          onClick={() => {
            agregar_producto(producto);
          }}
        >
          Añadir al carrito
        </button>
      )}
      {currentUser && currentUser.perfil === "Administrador" && (
        <Link
          to={`/productos/${id}/editar-producto`}
          className="ProductDetail_boton"
          style={{
            textDecoration: "none",
            color: "white",
            textAlign: "center",
          }}
        >
          Editar
        </Link>
      )}
      {currentUser && currentUser.perfil === "Administrador" && (
        <button
          className="ProductDetail_boton"
          onClick={handleDelete}
          style={{ backgroundColor: "#c0392b", marginTop: "1rem" }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
}

export default ProductDetail;
