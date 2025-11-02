# E-commerce Mueblería Hermanos Jota

## 👥 Miembros del proyecto

Los miembros que participaron en el desarrollo de este proyecto son:

* Hugo Antonio Frey Aguilar
* Tiago Gabriel Dominguez

## 🛠️ Tecnologías Utilizadas

Las tecnologías empleadas para el desarrollo de este producto son:

* React
* Express.JS

## 🧩 Arquitectura

Se optó por una arquitectura **backend–frontend**, separando las responsabilidades entre la lógica del servidor y la interfaz de usuario. Esto facilita la **escalabilidad, el mantenimiento y la reutilización del código**.

En el **backend**, se implementó un enfoque **Modelo–Vista–Controlador (MVC)**, manteniendo la lógica de negocio, las rutas y la manipulación de datos desacopladas.

En el **frontend**, se adoptó un enfoque **orientado a componentes**, que permite una interfaz modular, reutilizable y fácil de mantener, asegurando organización y consistencia en la aplicación.

---

## ⚙️ Configuración Inicial

Antes de ejecutar el proyecto, se debe crear un archivo llamado **`.env`** en la carpeta raíz del **backend** con el siguiente contenido:

```
CONECTOR=clave_de_mongodb_atlas
```

> Reemplazá `clave_de_mongodb_atlas` por la cadena de conexión real de tu base de datos en MongoDB Atlas.

---

## 🚀 Ejecución

### 🖥️ Backend

1. Accede por consola a la carpeta **`backend`**.
2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```
3. Inicia el servicio:

   ```bash
   npm run start
   ```

### 💻 Frontend

1. Accede por consola a la carpeta **`client`**.
2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```
## 🚀 Despliegue

### 🖥️ Backend
[Link de despliegue en Render](https://e-commerce-itba.onrender.com/api/productos)

### 💻 Frontend
[Link de despliegue en Netlify](https://phenomenal-shortbread-8db966.netlify.app/)
