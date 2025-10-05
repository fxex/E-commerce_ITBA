import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './pages/Inicio'
import BarraNavegacion from "./Componentes/navbar.jsx"
import Footer from "./Componentes/Footer.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BarraNavegacion/>
    <Inicio/>
    <Footer/>
  </StrictMode>
)