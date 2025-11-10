const mongoose = require("mongoose")

const UsuarioSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            require: true,
            trim: true
        },
        email:{
            type: String,
            require: true,
            trim: true
        },
        password:{
            type: String,
            require: true,
            trim: true
        }
    }
)

const Usuario = mongoose.model("Usuario", UsuarioSchema)

module.exports = Usuario;