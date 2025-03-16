
const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController.js');
const withAuth = require('../controller/middleware/middlewareAuth.js');
//add withAuth em tudo na fase 2, deixar sem para facilitar os testes

router.get('/admin', withAuth, adminController.getAllAdministrador);
router.post('/admin', withAuth, adminController.postAdministrador);
router.get('/admin/:id', withAuth, adminController.getAdministrador);
router.put('/admin/:id', withAuth, adminController.putAdministrador);
router.delete('/admin/:id', withAuth, adminController.deleteAdministrador);

module.exports = router;
