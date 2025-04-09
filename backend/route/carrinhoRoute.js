const express = require("express");
const router = express.Router();
const carrinhoController = require("../controller/carrinhoController.js");
const withAuth = require('../controller/middleware/middlewareAuth.js');

// LISTAR TODOS OS ITENS DO CARRINHO
router.get("/carrinho", carrinhoController.getAllCarrinhos);

// BUSCAR UM ITEM DO CARRINHO PELO ID
router.get("/carrinho/:id", carrinhoController.getCarrinho);

// ADICIONAR AO CARRINHO
router.post("/carrinho", carrinhoController.postCarrinho);

// DELETAR ITEM DO CARRINHO PELO ID
router.delete("/carrinho/:id", carrinhoController.deleteCarrinho);

// ATUALIZAR ITEM DO CARRINHO PELO ID
router.put("/carrinho/:id", carrinhoController.putCarrinho);


module.exports = router;

