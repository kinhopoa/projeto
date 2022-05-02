const express = require('express');
const adminController = require('../controllers/AdminController');
const router = express.Router();


router.get('/produtos', adminController.listarProdutos);
router.get('/usuarios', adminController.listarUsuario);
router.get('/cadastroproduto', adminController.store);
router.get('/cadastroproduto', adminController.store);


module.exports = router;