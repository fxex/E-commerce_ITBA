const express = require("express");
const ControladorProducto = require("../controller/controllerProducto");
const verifyToken = require("../middleware/authHandler");

const router = express.Router();
const controladorProducto = new ControladorProducto();

router.get("/", async (req, res, next) => {
  try {
    const productos = await controladorProducto.obtenerProductos();
    res.json(productos);
  } catch (error) {
    console.error("Error al solicitar todos los productos:", error.message);
    next(error);
  }
});

router.post("/", verifyToken, async (req, res, next) => {
  try {
    const datosNuevoProducto = req.body;
    const productoCreado = await controladorProducto.crearProducto(
      datosNuevoProducto
    );
    res.status(201).json({
      mensaje: "Producto creado con éxito",
      producto: productoCreado, // Enviamos el documento completo con el _id generado por MongoDB
    });
  } catch (error) {
    console.error("Error al crear producto:", error.message);
    error.status = 400; // Generalmente, un error de validación es un Bad Request (400)
    next(error);
  }
});

router.get("/:id_producto", async (req, res, next) => {
  try {
    const producto = await controladorProducto.obtenerProductosId(
      req.params.id_producto
    );

    res.json(producto);
  } catch (error) {
    console.error("Error al buscar producto por ID:", error.message);
    error.status = 400; // Generalmente, un ID malformado es un Bad Request (400)
    next(error);
  }
});

router.put("/:id_producto", verifyToken, async (req, res, next) => {
  try {
    const id_producto = req.params.id_producto;
    const body = req.body;
    const productoActualizado = await controladorProducto.actualizarProducto(
      id_producto,
      body
    );
    res.status(200).json({
      mensaje: "Producto actualizado con éxito",
      producto: productoActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar Producto:", error.message);
    error.status = 400;
    next(error);
  }
});

router.delete("/:id_producto", verifyToken, async (req, res, next) => {
  try {
    const id_producto = req.params.id_producto;
    const productoEliminado = await controladorProducto.eliminarProducto(
      id_producto
    );
    res.status(200).json({
      mensaje: "Producto eliminado con éxito",
      producto: productoEliminado,
    });
  } catch (error) {
    console.error("Error al eliminar Producto:", error.message);
    error.status = 400; // Puede ser por un ID malformado
    next(error);
  }
});

module.exports = router;
