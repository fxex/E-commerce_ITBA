import { useState } from 'react'

//Todos los componentes
import Inicio from './pages/Inicio'
import Footer from './Componentes/Footer'
import Contacto from './pages/Form'
import BarraNavegacion from './Componentes/Navbar'
import Productos from './pages/Productos'

function App() {
  const [paginaActual, setPaginaActual] = useState("inicio")
  const [carrito, setCarrito] = useState([])

  

  return (
    <>
    <BarraNavegacion cambiarPagina={setPaginaActual} carrito={carrito.length} />
    
    {paginaActual === "inicio" && <Inicio />}
    {paginaActual === "productos" && <Productos setCarrito={setCarrito} />}
    {paginaActual === "Contacto" && <Contacto />}
    <Footer/>
    </>
  )
}

export default App
