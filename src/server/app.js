import express from "express"

import path from "path"
import { fileURLToPath } from "url"

import { conectarDB } from "./database/connection.js"

import puntosRoutes from "./routes/puntos.routes.js"
import paradasRoutes from "./routes/paradas.routes.js"
import lineasRoutes from "./routes/lineas.routes.js"
//import recorridosRoutes from "./routes/recorridos.routes.js"

const app = express()

const PORT = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static("src/public"))

app.use("/leaflet", express.static(path.join(__dirname, "../../node_modules/leaflet/dist")))

app.use("/puntos", puntosRoutes)
app.use("/paradas", paradasRoutes)
app.use("/lineas", lineasRoutes)
//app.use("/recorridos", recorridosRoutes)

await conectarDB()

app.listen(PORT, () => {
  console.log(
    `Servidor iniciado en puerto http://localhost:${PORT}`
  )
})