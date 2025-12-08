import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';

// IMPORTANTE: Asegúrate de que la ruta coincida con el nombre real de tu archivo
// Si renombraste el archivo a CartProvider.jsx, úsalo aquí:
import { CartProvider } from './context/CartProvider.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App /> 
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);