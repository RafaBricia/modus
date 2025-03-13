const express = require('express');
const router = express.Router();
const { categoriaAllget, postCategoria, putCategoria, deleteCategoria } = require('../controller/categoriaController.js');
const validateID = require('../middleware/validateID.js');

router.get('/categoria', categoriaAllget);
router.post('/categoria', postCategoria);
router.put('/categoria/:id', validateID, putCategoria);
router.delete('/categoria/:id',validateID, deleteCategoria);

module.exports = router;