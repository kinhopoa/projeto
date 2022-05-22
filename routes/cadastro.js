const express = require('express');
const CadastroUsuario = require('../controllers/CadastroUsuario');
const router = express.Router();
const validadores = require('../middlewares/validadores')

router.get('/', CadastroUsuario.index);
router.post('/', validadores.cadastroValidador, CadastroUsuario.store);


module.exports = router;