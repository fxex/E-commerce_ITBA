import { Route, Routes } from "react-router-dom";

//Paginas
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Form";
import Productos from "./pages/Productos";
import CrearProducto from "./pages/Admin/CrearProducto";
import Carrito from "./pages/Carrito";
import NotFound from "./notFound/notFound";

//Componentes
import Footer from "./Componentes/Footer";
import BarraNavegacion from "./Componentes/Navbar";
import ProductDetail from "./Componentes/ProductDetail";
import LoginPage from "./pages/Login";
import RutaProtegida from "./Componentes/RutaProtegida";
import Registrarse from "./pages/Registrarse";

function App() {
  return (
    <>
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<Registrarse />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/carrito"
          element={<RutaProtegida element={<Carrito />} />}
        />
        <Route path="/admin/crear-producto" element={<CrearProducto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
