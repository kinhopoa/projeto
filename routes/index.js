var express = require('express');
const ProdutosController = require('../controllers/produtosController')
var router = express.Router();

router.get('/', ProdutosController.index);
router.get('/search', ProdutosController.search)

module.exports = router;
