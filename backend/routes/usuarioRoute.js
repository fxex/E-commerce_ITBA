const express = require("express");
const ControladorUsuario = require("../controller/controllerUsuario");
const router = express.Router();
const controladorUsuario = new ControladorUsuario();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/authHandler");

router.get("/", verifyToken, async (req, res, next) => {
  try {
    const usuarios = await controladorUsuario.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error("Error al solicitar todos los usuarios:", error.message);
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { correo, contrasenia } = req.body;
    const usuario = await controladorUsuario.obtenerUsuarioEmail(correo);
    const passwordMatch = await bcrypt.compare(contrasenia, usuario.password);
    if (!passwordMatch) {
      const error = new Error("Usuario o contraseña incorrectos");
      error.status = 401;
      throw error;
    }
    const { password, ...usuarioSinContrasenia } = usuario;

    const token = jwt.sign(usuarioSinContrasenia, process.env.JWT_SECRET);

    res.json({ logueado: token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    next(error);
  }
});

router.post("/registro", async (req, res, next) => {
  try {
    const datosNuevoUsuario = req.body;
    const { password, ...usuarioCreado } =
      await controladorUsuario.crearUsuario(datosNuevoUsuario);

    res.status(201).json({
      mensaje: "Usuario creado con éxito",
      usuario: usuarioCreado, // Enviamos el documento completo con el _id generado por MongoDB
    });
  } catch (error) {
    console.error("Error al crear usuario:", error.message);
    error.status = 400; // Generalmente, un error de validación es un Bad Request (400)
    next(error);
  }
});

router.get("/:id_usuario", verifyToken, async (req, res, next) => {
  try {
    const usuario = await controladorUsuario.obtenerUsuarioId(
      req.params.id_usuario
    );
    const { password, ...usuarioSinContrasenia } = usuario;

    res.json(usuarioSinContrasenia);
  } catch (error) {
    console.error("Error al buscar usuario por ID:", error.message);
    error.status = 400; // Generalmente, un ID malformado es un Bad Request (400)
    next(error);
  }
});

router.put("/:id_usuario", verifyToken, async (req, res, next) => {
  try {
    const id_usuario = req.params.id_usuario;
    const body = req.body;
    const usuarioActualizado = await controladorUsuario.actualizarUsuario(
      id_usuario,
      body
    );
    res.status(200).json({
      mensaje: "Usuario actualizado con éxito",
      usuario: usuarioActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar Usuario:", error.message);
    error.status = 400;
    next(error);
  }
});

router.delete("/:id_usuario", verifyToken, async (req, res, next) => {
  try {
    const id_usuario = req.params.id_usuario;
    const usuarioEliminado = await controladorUsuario.eliminarUsuario(
      id_usuario
    );
    res.status(200).json({
      mensaje: "Usuario eliminado con éxito",
      usuario: usuarioEliminado,
    });
  } catch (error) {
    console.error("Error al eliminar Usuario:", error.message);
    error.status = 400; // Puede ser por un ID malformado
    next(error);
  }
});

module.exports = router;
