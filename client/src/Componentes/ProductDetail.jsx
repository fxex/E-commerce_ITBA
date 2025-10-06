import "../styles/ProductoDetail.css"

function ProductDetail({ producto, agregarAlCarrito, verMenos }) {
  const { nombre, precio, imagen, descripcion, materiales, tamaño } = producto;

  return (
<<<<<<< HEAD
    <div className="ProductDetail_Container">
      <img src={imagen} alt={nombre} className="ProductDetail_img"/>
      <h2 className="ProductDetail_title">{nombre}</h2>
      <h3 className="ProductDetail_precio">${precio}</h3>
      <p className="ProductDetail_text">{descripcion}</p>
      <p className="ProductDetail_text">Materiales: {materiales}</p>
      <p className="ProductDetail_text">Tamaño: {tamaño}</p>
      <button className="ProductDetail_boton" onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
      <button className="ProductDetail_boton" onClick={verMenos}>Ver menos</button>
=======
    <div>
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <p>{descripcion}</p>
      <p>Materiales: {materiales}</p>
      <p>Tamaño: {tamaño}</p>
      <button onClick={() => agregarAlCarrito((prevState) => [...prevState, producto])}>Añadir al carrito</button>
      <button onClick={verMenos}>Ver menos</button>
>>>>>>> 67411fcbf78f02bafd3a3182244af19958879ba6
    </div>
  );
}

export default ProductDetail
