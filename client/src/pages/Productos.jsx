import React from 'react'
import productosSimulados from '../Componentes/SimuladorDatos'
import "../styles/productos.css"
import VistaProductos from '../Componentes/VistaProductos'

function Productos({setCarrito}) {
  return (
    <section className='contenedor_productos'>
        <h2 className='title'>Productos</h2>
        <VistaProductos productos={productosSimulados} agregarAlCarrito={setCarrito}/>
    </section>
  )
}

export default Productos