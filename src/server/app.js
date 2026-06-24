import express from "express";

const app = express();

const PORT = 3000;

app.use(express.static("src/public"))

app.listen(PORT, () => {
  console.log(
    `Servidor iniciado en puerto http://localhost:${PORT}`
  );
});