import "../styles/ProductCard.css";

function ProductDetail({ producto, agregarAlCarrito, verMenos }) {
  const { nombre, precio, imagen, descripcion, materiales, tamaño } = producto;

  return (
    <div>
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <p>{descripcion}</p>
      <p>Materiales: {materiales}</p>
      <p>Tamaño: {tamaño}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
      <button onClick={verMenos}>Ver menos</button>
    </div>
  );
}

export default ProductDetail
