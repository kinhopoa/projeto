const express = require('express');
const ProdutosController = require('../controllers/produtosController')
const router = express.Router();

router.get('/', ProdutosController.index);
router.get('/search', ProdutosController.search)

module.exports = router;
