import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logoCarrito from "../assets/logo_carrito.png";
import "../styles/navbar.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function BarraNavegacion() {
  const { currentUser, logout } = useContext(AuthContext);
  const { total } = useContext(CartContext);
  if (!currentUser) {
    return (
      <header>
        <nav className="navegacion_container">
          <img src={logo} alt="Logo Hermanos Jota" className="imagen_logo" />
          <ul className="navegacion_links">
            <li>
              <Link to="/" className="Botones_navegacion">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="Botones_navegacion">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="Botones_navegacion">
                Contacto
              </Link>
            </li>

            <li>
              <Link to="/login" className="Botones_navegacion">
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  if (currentUser.perfil == "Administrador") {
    return (
      <header>
        <nav className="navegacion_container">
          <img src={logo} alt="Logo Hermanos Jota" className="imagen_logo" />
          <ul className="navegacion_links">
            <li>
              <Link to="/" className="Botones_navegacion">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="Botones_navegacion">
                Productos
              </Link>
            </li>

            <li>
              <Link to="/admin/lista-usuarios" className="Botones_navegacion">
                Usuarios
              </Link>
            </li>

            <li>
              <Link to="/perfil" id="perfil" className="Botones_navegacion">
                Mi perfil
              </Link>
            </li>

            <li>
              <Link to="/" onClick={logout} className="Botones_navegacion">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <header>
      <nav className="navegacion_container">
        <img src={logo} alt="Logo Hermanos Jota" className="imagen_logo" />
        <ul className="navegacion_links">
          <li>
            <Link to="/" className="Botones_navegacion">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" className="Botones_navegacion">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="Botones_navegacion">
              Contacto
            </Link>
          </li>
          {currentUser ? (
            <li>
              <Link to="/perfil" id="perfil" className="Botones_navegacion">
                Mi perfil
              </Link>
            </li>
          ) : null}

          <li>
            {currentUser ? (
              <Link to="/" onClick={logout} className="Botones_navegacion">
                Cerrar Sesión
              </Link>
            ) : (
              <Link to="/login" className="Botones_navegacion">
                Iniciar Sesión
              </Link>
            )}
          </li>

          {currentUser ? (
            <li>
              <Link to="/carrito" id="carrito">
                <img
                  src={logoCarrito}
                  alt="carrito de compra"
                  className="nav_carrito"
                />{" "}
                {total}
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
//algo

export default BarraNavegacion;
