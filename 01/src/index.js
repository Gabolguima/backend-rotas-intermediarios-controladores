const express = require("express");
const rotas = require("./roteador");

const app = express();
const porta = 3000;

app.use(rotas);

app.listen(porta,
  console.log(`Servidor rodando na porta ${porta}.`)
);