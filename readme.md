# 🛒 E-commerce Mueblería Hermanos Jota

![Status](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

Bienvenido al repositorio de **Mueblería Hermanos Jota**, una plataforma de comercio electrónico diseñada para ofrecer una experiencia de usuario fluida y administración eficiente de productos.

## 👥 Equipo de Desarrollo

- **Hugo Antonio Frey Aguilar**
- **Tiago Gabriel Dominguez**

---

## ✨ Características Principales

### 👤 Usuarios

- **Autenticación Segura**: Registro e inicio de sesión con JWT.
- **Gestión de Perfil**: Visualización y edición de datos personales.

### 🛍️ Productos

- **Catálogo Completo**: Visualización de productos disponibles con detalles.
- **Carrito de Compras**: Agregar productos y gestionar el pedido antes de la compra.

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React** + **Vite**: Para una interfaz rápida y reactiva.
- **CSS Puro / Modules**: Estilos personalizados y modulares.
- **React Router**: Navegación SPA (Single Page Application).

### Backend

- **Node.js** + **Express**: Servidor RESTful API escalable.
- **MongoDB** + **Mongoose**: Base de datos NoSQL y modelado de objetos.
- **JWT**: Seguridad en la autenticación.

---

## 🧩 Arquitectura

El proyecto sigue una arquitectura **Frontend-Backend** separada:

- **Backend (MVC)**: Modelo-Vista-Controlador para separar lógica de negocio, rutas y acceso a datos.
- **Frontend (Component Based)**: Interfaz modular reutilizable.

---

## 🚀 Guía de Instalación y Ejecución

Sigue estos pasos para levantar el proyecto localmente.

### Prerrequisitos

- Node.js instalado.
- MongoDB Atlas URI (Base de datos).

### 1. Configuración del Backend

1. Navega a la carpeta `backend`:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz de `backend` con tu conexión a MongoDB:
   ```env
   CONECTOR=tu_string_de_conexion_mongodb
   JWT_SECRET=tu_clave_secreta_jwt
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```

### 2. Configuración del Frontend

1. Abre una nueva terminal y navega a la carpeta `client`:
   ```bash
   cd client
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🌐 Despliegue

La aplicación se encuentra desplegada y disponible en:

| Servicio               | Link                                                                      |
| ---------------------- | ------------------------------------------------------------------------- |
| **Frontend** (Netlify) | [Visitar Sitio Web](https://phenomenal-shortbread-8db966.netlify.app/)    |
| **Backend** (Render)   | [API Docs / Endpoint](https://e-commerce-itba.onrender.com/api/productos) |

---

_Desarrollado para el ITBA_
