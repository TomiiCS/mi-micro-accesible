import express from "express";
import { conectarDB } from "./database/connection.js";

const app = express();

const PORT = 3000;

app.use(express.static("src/public"));

await conectarDB();

app.listen(PORT, () => {
  console.log(
    `Servidor iniciado en puerto http://localhost:${PORT}`
  );
});