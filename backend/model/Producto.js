const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
    },
    precio: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
    },
    imagenURL: {
      type: String,
    },
    materiales: {
      type: String,
    },
    tamaño: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
