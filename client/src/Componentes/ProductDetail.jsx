import "../styles/ProductoDetail.css"

function ProductDetail({ producto, agregarAlCarrito, verMenos }) {
  const { nombre, precio, imagen, descripcion, materiales, tamaño } = producto;

  return (

    <div className="ProductDetail_Container">
      <img src={imagen} alt={nombre} className="ProductDetail_img"/>
      <h2 className="ProductDetail_title">{nombre}</h2>
      <h3 className="ProductDetail_precio">${precio}</h3>
      <p className="ProductDetail_text">{descripcion}</p>
      <p className="ProductDetail_text">Materiales: {materiales}</p>
      <p className="ProductDetail_text">Tamaño: {tamaño}</p>
      <button className="ProductDetail_boton" onClick={() => agregarAlCarrito((prev)=>[...prev, producto])}>Añadir al carrito</button>
      <button className="ProductDetail_boton" onClick={verMenos}>Ver menos</button>
    </div>
  );
}

export default ProductDetail
