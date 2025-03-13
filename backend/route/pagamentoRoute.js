const express = require('express');
const router = express.Router();
const PagamentoController = require('../controller/pagamentoController.js');


router.get('/pagamento', PagamentoController.getAllPagamento);
router.post('/pagamento', PagamentoController.postPagamento);
router.get('/pagamento/:id',PagamentoController.getPagamento);
router.put('/pagamento/:id', PagamentoController.putPagamento);
router.delete('/pagamento/:id',PagamentoController.deletePagamento);

module.exports = router;