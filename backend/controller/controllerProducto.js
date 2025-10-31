const Producto = require("../model/Producto");

class ControladorProducto {
  constructor() {
    this._productos = Producto;
  }

  async obtenerProductos() {
    try {
      const productos = await this._productos.find({});
      return productos;
    } catch (error) {
      throw error;
    }
  }

  async obtenerProductosId(id_producto) {
    try {
      const producto = await this._productos.findById(id_producto);
      if (!producto) {
        const error = new Error("Producto no encontrado");
        error.status = 404;
        throw error
      }
      return producto;
    } catch (error) {
      throw error;
    }
  }

  async crearProducto(body) {
    try {
      if (
        !body.nombre ||
        body.nombre.trim() === "" ||
        !body.precio ||
        body.precio < 0
      ) {
        const error = new Error(
          "Los campos requeridos no estan bien completados"
        );
        error.status = 400;
        throw error;
      }
      const nuevoProducto = new Producto(body);
      return await nuevoProducto.save();
    } catch (error) {
      throw error;
    }
  }

  async actualizarProducto(id_producto, body){
    try {
      if (
        !body.nombre ||
        body.nombre.trim() === "" ||
        !body.precio ||
        body.precio < 0
      ) {
        const error = new Error(
          "Los campos requeridos no estan bien completados"
        );
        error.status = 400;
        throw error;
      }
      const productoActualizado = await this._productos.findByIdAndUpdate(
        id_producto,
        body,
        {
          new: true,
          runValidators: true
        }
      );
      if (!productoActualizado) {
        const error = new Error("Producto no encontrado");
        error.status = 404;
        throw error
      }
      return productoActualizado;
    } catch (error) {
      throw error;
    }
  }
  async eliminarProducto(id_producto) {
    try {
      const productoEliminado = await this._productos.findByIdAndDelete(id_producto);
      if (!productoEliminado) {
        const error = new Error("Producto no encontrado");
        error.status = 404;
        throw error
      }
      return productoEliminado;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ControladorProducto;
