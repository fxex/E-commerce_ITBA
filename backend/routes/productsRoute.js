const express = require("express");
const ControladorProducto = require("../controller/controllerProducto");
const productos = require("./../data/productos");

const router = express.Router();
const controladorProducto = new ControladorProducto();
controladorProducto.productos = productos

router.get("/", (req, res) => {
  res.json(controladorProducto.productos);
});

router.get("/:id_producto", (req, res, next) => {
  const producto = controladorProducto.obtenerProductosId(
    req.params.id_producto
  );
  if (!producto) {
    const error = new Error("Producto no encontrado");
    error.status = 404;
    return next(error);
  }

  res.json(producto)
});

module.exports = router;
