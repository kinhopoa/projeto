const express = require('express');
const CadastroUsuario = require('../controllers/CadastroUsuario');
const { check,validationResult,body } = require('express-validator')
const validator = require('../middlewares/validator')
const router = express.Router();

router.get('/', CadastroUsuario.index);
router.post('/', validator, CadastroUsuario.store);


module.exports = router;