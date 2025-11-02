import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logoCarrito from "../assets/logo_carrito.png";
import "../styles/navbar.css";

function BarraNavegacion({ carrito }) {
  return (
    <header>
      <nav className="navegacion_container">
          <img src={logo} alt="Logo Hermanos Jota" className="imagen_logo" />
        <ul className="navegacion_links">
          <li>
            <Link to="/" className="Botones_navegacion">Inicio</Link>
          </li>
          <li>
            <Link to="/productos" className="Botones_navegacion">Productos</Link>
          </li>
          <li>
            <Link to="/contacto" className="Botones_navegacion">Contacto</Link>
          </li>
          <li>
            <Link to="/carrito" id="carrito">
              <img src={logoCarrito} alt="carrito de compra" className="nav_carrito" /> {carrito}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}     
//algo

export default BarraNavegacion;
