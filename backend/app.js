const express = require('express')
const log = require("./middleware/global")
const errorHandler = require("./middleware/errorHandler")
const handler404 = require("./middleware/handler404")

const app = express()
const port = 3000

// Middlewares
app.use(log)
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Uso del manejador del recurso no encontrado
app.use(handler404)

// Uso del manejador de errores centralizado
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`)
})