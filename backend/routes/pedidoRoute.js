const express = require("express");
const ControladorPedido = require("../controller/controllerPedido");
const verifyToken = require("../middleware/authHandler");

const router = express.Router();
const controladorPedido = new ControladorPedido();

router.get("/", verifyToken, async (req, res, next) => {
  try {
    const pedidos = await controladorPedido.obtenerPedidosUsuario(req.user._id);
    res.json(pedidos);
  } catch (error) {
    console.error("Error al solicitar todos los pedidos:", error.message);
    next(error);
  }
});

router.post("/", verifyToken, async (req, res, next) => {
  try {
    const datosNuevoPedido = { ...req.body, usuarioId: req.user._id };
    const pedidoCreado = await controladorPedido.crearPedido(datosNuevoPedido);
    res.status(201).json({
      mensaje: "Pedido creado con éxito",
      pedido: pedidoCreado,
    });
  } catch (error) {
    console.error("Error al crear pedido:", error.message);
    error.status = 400;
    next(error);
  }
});

module.exports = router;
