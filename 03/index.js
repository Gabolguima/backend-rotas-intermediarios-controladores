const express = require("express");
const rotas = require("./roteador");

const app = express();
const porta = 8000;

app.use(express.json());
app.use(rotas);

app.listen(porta,
  console.log(`Servidor rodando na porta ${porta}.`)
);