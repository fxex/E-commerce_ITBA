const mongoose = require("mongoose");

const ProductoSnapshoptSchema = new mongoose.Schema(
  {
    productoId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Producto",
    },
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const HistorialSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Usuario",
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  productos: {
    type: [ProductoSnapshoptSchema],
    required: true,
  },
  total: {
    type: Number,
  },
});

const Historial = mongoose.model("Historial", HistorialSchema);

module.exports = Historial;
