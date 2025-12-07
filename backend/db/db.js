const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.CONECTOR)
  .then(() => {
    console.log("¡Conexión exitosa a MongoDB!");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });
