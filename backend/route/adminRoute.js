
const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController.js');
const withAuth = require('../controller/middleware/middlewareAuth.js');
//add withAuth em tudo
router.get('/admin', adminController.getAllAdministrador);
router.post('/admin',  adminController.postAdministrador);
router.get('/admin/:id',  adminController.getAdministrador);
router.put('/admin/:id',  adminController.putAdministrador);
router.delete('/admin/:id',  adminController.deleteAdministrador);

module.exports = router;
