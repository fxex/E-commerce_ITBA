import logo from "../assets/logo.svg"
import logoCarrito from "../assets/logo_carrito.png"
import "../styles/navbar.css";

function BarraNavegacion(){

    return(
        <header>
            <nav className="navegacion_container">
                <img src={logo} alt="Logo Hermanos Jota" className="imagen_logo"/>
                <ul className="navegacion_links">
                    <li><a >Inicio</a></li>
                    <li><a >Productos</a></li>
                    <li><a >Contacto</a></li>
                    <li><a id="carrito">
                        <img src={logoCarrito} alt="carrito de compra" className="nav_carrito"/>
                    </a></li>

                </ul>
            </nav>
        </header>
    )
};


export default BarraNavegacion