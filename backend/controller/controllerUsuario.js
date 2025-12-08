const Usuario = require("../model/Usuario");
const bcrypt = require("bcrypt");

class ControladorUsuario {
  constructor() {
    this._usuario = Usuario;
  }
  async obtenerUsuarios() {
    try {
      const usuarios = await this._usuario.find({});
      return usuarios;
    } catch (error) {
      throw error;
    }
  }

  async obtenerUsuarioId(id_usuario) {
    try {
      const usuario = await this._usuario.findById(id_usuario).lean();
      if (!usuario) {
        const error = new Error("Usuario no encontrado");
        error.status = 404;
        throw error;
      }
      return usuario;
    } catch (error) {
      throw error;
    }
  }

  async obtenerUsuarioEmail(email) {
    try {
      const usuario = await this._usuario.findOne({ email: email }).lean();
      if (!usuario) {
        const error = new Error("Usuario no encontrado");
        error.status = 404;
        throw error;
      }
      return usuario;
    } catch (error) {
      throw error;
    }
  }

  async crearUsuario(body) {
    try {
      if (
        !body.username ||
        body.username.trim() === "" ||
        !body.email ||
        !body.password ||
        !body.perfil
      ) {
        const error = new Error(
          "Los campos requeridos no estan bien completados"
        );
        error.status = 400;
        throw error;
      }
      const usuario = await this._usuario.findOne({ email: body.email });
      if (usuario) {
        const error = new Error("El usuario ya esta registrado");
        error.status = 400;
        throw error;
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt);

      const nuevoUsuario = new Usuario({
        username: body.username,
        email: body.email,
        password: hashedPassword,
        perfil: body.perfil,
      });
      const usuarioCreado = await nuevoUsuario.save();
      return usuarioCreado.toObject();
    } catch (error) {
      throw error;
    }
  }

  async actualizarUsuario(id_usuario, body) {
    try {
      if (
        !body.username ||
        body.username.trim() === "" ||
        !body.email ||
        !body.perfil
      ) {
        const error = new Error(
          "Los campos requeridos no estan bien completados"
        );
        error.status = 400;
        throw error;
      }
      const usuarioActualizado = await this._usuario.findByIdAndUpdate(
        id_usuario,
        body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!usuarioActualizado) {
        const error = new Error("Usuario no encontrado");
        error.status = 404;
        throw error;
      }
      return usuarioActualizado;
    } catch (error) {
      throw error;
    }
  }
  async eliminarUsuario(id_usuario) {
    try {
      const usuarioEliminado = await this._usuario.findByIdAndDelete(
        id_usuario
      );
      if (!usuarioEliminado) {
        const error = new Error("Usuario no encontrado");
        error.status = 404;
        throw error;
      }
      return usuarioEliminado;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ControladorUsuario;
