const express = require('express');
const CadastroUsuario = require('../controllers/CadastroUsuario');
const validateRegister = require('../middlewares/validator');
const router = express.Router();

router.get('/', CadastroUsuario.index);
router.post('/', validateRegister, CadastroUsuario.store);


module.exports = router;