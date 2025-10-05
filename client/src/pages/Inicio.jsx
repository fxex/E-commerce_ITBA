import VistaProductos from '../Componentes/VistaProductos'
import React from 'react'
import fondoHero from "../assets/fondo.jpg"
import "../styles/inicio.css"
import productosSimulados from "../Componentes/SimuladorDatos"

function Inicio() {
  return (
    <>
        <section className="hero_container">
            <img src={fondoHero} alt="imagen Princial" className="img-hero"/>
            <div className="texto-img">
                <h1 className="titulo_principal">Muebleria Hermanos Jota</h1>
                <p className="frase_clave">Cada pieza cuenta la historia de manos expertas y materiales nobles</p>
            </div>
        </section>

        <section className="productos_container">
            <h2 className="titulo_productos">Productos Destacados</h2>
            <VistaProductos productos={productosSimulados}/>
        </section>
    </>

  )
}

export default Inicio