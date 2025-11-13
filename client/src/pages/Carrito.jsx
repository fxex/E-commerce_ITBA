import { Link } from "react-router-dom";
import ProductCard from "../Componentes/ProductCard.jsx";
import "../styles/VistaProducto.css";

function Carrito({ productos, eliminarDelCarrito }) {




  return (

    <div className="vista_productos">
      {productos.length === 0 ? (
        <p>Tu carrito está vacío 🛒</p>
      ) : (
        productos.map((item) => (
          <div key={item._id} className="producto_card">
            <ProductCard
              id={item._id}
              img={`${item.imagenURL}`}
              nombre={item.nombre}
              precio={item.precio}
              onRemove={() => eliminarDelCarrito(item._id)}
            />

          </div>
      ))
    )}
    </div>
  );
}

export default Carrito;
