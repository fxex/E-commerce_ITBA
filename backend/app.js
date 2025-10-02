const express = require('express')
const log = require("./middleware/global")

const app = express()
const port = 3000

// Middlewares
app.use(express.json())
app.use(log)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})