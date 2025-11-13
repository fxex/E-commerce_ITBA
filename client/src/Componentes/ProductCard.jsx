import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ id, img, nombre, precio, quantity, carrito, onRemove}) {
  return (
    <div className="card">
      <img src={img} alt={nombre} className="card_img" />
      <div className="card_body">
        <h3 className="card_title">{nombre}</h3>
        <p className="card_text">${precio}</p>
        {quantity && <p className="card_text">stock: {quantity}</p>}
        <Link to={`/productos/${id}`}>
          <button className="card_button">Ver detalles</button>
        </Link>
          {carrito && <button className="card_button" onClick={()=>{onRemove({id, img, nombre, precio, quantity})}}>Eliminar del carrito</button>}
      </div>
    </div>
  );
}

export default ProductCard;
