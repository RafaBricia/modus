const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController.js");

router.get("/produto", produtoController.getAllProdutos);
router.post("/produto", produtoController.postProduto);
router.delete("/produto/:id", produtoController.deleteProduto);
router.put("/produto/:id", produtoController.putProduto);

module.exports = router;