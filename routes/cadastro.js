const express = require('express');
const CadastroUsuario = require('../controllers/CadastroUsuario');
const router = express.Router();

router.get('/', CadastroUsuario.index);
router.post('/', CadastroUsuario.store);


module.exports = router;