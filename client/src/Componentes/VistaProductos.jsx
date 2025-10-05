import { useState } from "react";
import ProductCard from "../Componentes/ProductCard.jsx";
import ProductDetail from "../Componentes/ProductDetail.jsx";

function VistaProductos({ productos, agregarAlCarrito}) {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <>
      {productoSeleccionado ? (
        <ProductDetail
          producto={productoSeleccionado}
          agregarAlCarrito={agregarAlCarrito}
          verMenos={() => setProductoSeleccionado(null)}
        />
      ) : (
        <div className="vista_productos">
          {productos.map((prod) => (
            <ProductCard
              key={prod.id}
              img={prod.imagen}
              nombre={prod.nombre}
              precio={prod.precio}
              verTodoElDetalle={() => setProductoSeleccionado(prod)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default VistaProductos;
