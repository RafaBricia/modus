const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController.js");

router.get("/cliente", clienteController.getAllClientes);
router.post("/cliente", clienteController.postCliente);
router.delete("/cliente/:id", clienteController.deleteCliente);
router.put("/cliente/:id", clienteController.putCliente);

module.exports = router;

