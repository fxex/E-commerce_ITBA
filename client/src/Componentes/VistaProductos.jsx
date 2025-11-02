import { Link } from "react-router-dom";
import ProductCard from "../Componentes/ProductCard.jsx";
import "../styles/VistaProducto.css";

function VistaProductos({ productos }) {
  return (
    <div className="vista_productos">
      {productos.map((prod) => (
        <div key={prod._id} className="producto_card">
          <ProductCard
            id= {prod._id}
            img={`https://e-commerce-itba.onrender.com${prod.imagenURL}`}
            nombre={prod.nombre}
            precio={prod.precio}
          />
        </div>
      ))}
    </div>
  );
}

export default VistaProductos;
