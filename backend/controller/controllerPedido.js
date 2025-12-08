const Pedido = require("../model/Pedido");
const ControladorProducto = require("./controllerProducto");

class ControladorPedido {
  constructor() {
    this._pedido = Pedido;
  }

  async obtenerPedidosUsuario(id_usuario) {
    try {
      const pedidos = await this._pedido.find({ usuario: id_usuario });
      if (!pedidos) {
        const error = new Error("Pedidos no encontrado");
        error.status = 404;
        throw error;
      }
      return pedidos;
    } catch (error) {
      throw error;
    }
  }

  async crearPedido(body) {
    try {
      if (
        !body.usuarioId ||
        body.usuarioId.trim() === "" ||
        !body.productos ||
        body.productos.length === 0
      ) {
        const error = new Error(
          "Los campos requeridos no estan bien completados"
        );
        error.status = 400;
        throw error;
      }
      const productosId = body.productos.map((producto) => producto.productoId);
      const controladorProducto = new ControladorProducto();
      const productos = await controladorProducto.obtenerProductosIds(
        productosId
      );

      const snapshot = body.productos.map((producto) => {
        const p = productos.find((prod) =>
          prod._id.equals(producto.productoId)
        );
        return {
          productoId: p._id,
          cantidad: producto.quantity,
          precio: p.precio,
          nombre: p.nombre,
        };
      });

      const total = snapshot.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
      }, 0);

      const nuevoPedido = new Pedido({
        usuario: body.usuarioId,
        productos: snapshot,
        total: total,
      });
      return await nuevoPedido.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ControladorPedido;
