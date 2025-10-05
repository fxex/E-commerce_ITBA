import { useState } from "react";
import logo from "../assets/logo.svg"
import logoCarrito from "../assets/logo_carrito.png"
import "../styles/navbar.css";

function BarraNavegacion({cambiarPagina, carrito}){

    return(
        <header>
            <nav className="navegacion_container">
                <img src={logo} alt="Logo Hermanos Jota" className="imagen_logo"/>
                <ul className="navegacion_links">
                    <li><button onClick={() => cambiarPagina("inicio")}>Inicio</button></li>
                    <li><button onClick={() => cambiarPagina("productos")}>Productos</button></li>
                    <li><button onClick={() => cambiarPagina("Contacto")}>Contacto</button></li>
                    <li><a id="carrito">
                        <img src={logoCarrito} alt="carrito de compra" className="nav_carrito"/> {carrito}
                    </a></li>

                </ul>
            </nav>
        </header>
    )
};


export default BarraNavegacion