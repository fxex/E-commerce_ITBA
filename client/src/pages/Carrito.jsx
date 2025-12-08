import { Link } from "react-router-dom";
import ProductCard from "../Componentes/ProductCard.jsx";
import "../styles/VistaProducto.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Carrito() {
  const { carrito, eliminar_producto } = useContext(CartContext);

  return (
    <div className="vista_productos">
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío 🛒</p>
      ) : (
        carrito.map((item) => (
          <div key={item._id} className="producto_card">
            <ProductCard
              id={item._id}
              img={`${item.imagenURL}`}
              nombre={item.nombre}
              precio={item.precio}
              quantity={item.quantity}
              carrito={true}
              onRemove={() => eliminar_producto(item)}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Carrito;
