const express = require("express");

const routes = express.Router();
const ProdutoController = require("./controllers/ProdutoController");


routes.get("/", ProdutoController.produtos);
routes.post("/addproduto", ProdutoController.addproduto);
routes.post("/alterar", ProdutoController.alterar);
routes.post("/alterarProduto", ProdutoController.alterarProduto);
routes.get("/cadastro", ProdutoController.cadastro);
routes.post("/deletar", ProdutoController.deletar);


module.exports = routes;