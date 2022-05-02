const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/produtosController');


router.get('/', ProdutosController.index);
router.get('/canecas/:id?', ProdutosController.canecas);
router.get('/vestuario', ProdutosController.vestuario);
router.get('/vestuario/camisas/:id?', ProdutosController.camisas);
router.get('/vestuario/moletons/:id?', ProdutosController.moletons);
router.get('/vestuario/bones/:id?', ProdutosController.bones);
router.get('/games/:id?', ProdutosController.games);

module.exports = router;