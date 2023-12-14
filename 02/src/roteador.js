const express = require("express");
const {
  jogadaAtual,
  consultar,
  remover,
  adicionar
} = require("./controladores/jogadores");

const rotas = express();

rotas.get("/", jogadaAtual);

rotas.get("/consultar", consultar);

rotas.get("/remover", remover);

rotas.get("/adicionar", adicionar);

module.exports = rotas;