var express = require('express');
const ProdutosController = require('../controllers/produtosController')
var router = express.Router();

router.get('/', ProdutosController.index);

module.exports = router;
