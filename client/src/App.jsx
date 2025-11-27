import { Route, Routes } from 'react-router-dom'

//Paginas
import Inicio from './pages/Inicio'
import Contacto from './pages/Form'
import Productos from './pages/Productos'
import CrearProducto from './pages/Admin/CrearProducto'
import Carrito from "./pages/Carrito"
import NotFound from './notFound/notFound'

//Componentes
import Footer from './Componentes/Footer'
import BarraNavegacion from './Componentes/Navbar'
import ProductDetail from './Componentes/ProductDetail'


function App() {

  return (
    <>
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/carrito' element={<Carrito /> } />
        <Route path="/admin/crear-producto" element={<CrearProducto />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App
