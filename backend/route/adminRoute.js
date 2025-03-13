const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController.js');


router.get('/pagamento', adminController.getAllAdministrador);
router.post('/pagamento', adminController.postAdministrador);
router.get('/pagamento/:id',adminController.getAdministrador);
router.put('/pagamento/:id', adminController.putAdministrador);
router.delete('/pagamento/:id',adminController.deleteAdministrador);

module.exports = router;