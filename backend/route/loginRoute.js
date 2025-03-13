const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController.js');
const WithAuth = require('../controller/middleware/middlewareAuth.js');


router.post('/login', WithAuth, loginController.loginAdmin);
router.post('/login', WithAuth, loginController.loginCliente);
// ajeitar wuthauth n é aqui, isso é o token

module.exports = router;