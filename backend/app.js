const express = require('express')
const cors = require('cors')
const log = require("./middleware/global")
const errorHandler = require("./middleware/errorHandler")
const handler404 = require("./middleware/handler404")
const productsRoute = require("./routes/productsRoute")
const usuarioRoute = require("./routes/usuarioRoute")
require("./db/db")

const app = express()
const port = 3000

// Middlewares
app.use(cors())
app.use(log)
app.use(express.json())


app.use("/api/productos", productsRoute)
app.use("/api/usuarios", usuarioRoute)
// Uso del manejador del recurso no encontrado
app.use(handler404)

// Uso del manejador de errores centralizado
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`)
})