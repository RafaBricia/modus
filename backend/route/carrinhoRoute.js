const express = require("express");
const router = express.Router();
const carrinhoController = require("../controller/carrinhoController.js");

router.get("/carrinho", carrinhoController.getAllCarrinhos);
router.post("/carrinho", carrinhoController.postCarrinho);
router.delete("/carrinho/:id", carrinhoController.deleteCarrinho);
router.put("/carrinho/:id", carrinhoController.putCarrinho);

module.exports = router;

