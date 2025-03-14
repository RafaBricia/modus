const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController.js');

router.post('/loginAdmin', loginController.loginAdmin);
router.post('/loginCliente', loginController.loginCliente);

module.exports = router;