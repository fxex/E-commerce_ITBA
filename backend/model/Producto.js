const mongoose = require("mongoose")

const ProductoSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            require: true,
            trim: true
        },
        descripcion:{
            type: String,
        },
        precio:{
            type: Number,
            require: true,
        },
        stock:{
            type: Number,
        },
        imagenURL:{
            type: String,
        },
    }
)

const Producto = mongoose.model("Producto", ProductoSchema)

module.exports = Producto;
