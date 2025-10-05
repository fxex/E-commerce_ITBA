import { useState } from 'react'
import './App.css'

//Todos los componentes
import Inicio from './pages/Inicio'
import Footer from './Componentes/Footer'
import Contacto from './pages/Form'
import BarraNavegacion from './Componentes/navbar'
import Productos from './pages/Productos'

function App() {
  const [paginaActual, setPaginaActual] = useState("inicio")


  

  return (
    <>
    <BarraNavegacion cambiarPagina={setPaginaActual} />
    
    {paginaActual === "inicio" && <Inicio />}
    {paginaActual === "productos" && <Productos />}
    {paginaActual === "Contacto" && <Contacto />}
    <Footer/>
    </>
  )
}

export default App
