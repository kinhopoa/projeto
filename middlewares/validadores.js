const { check } = require('express-validator');

const validadores = {
  cadastroValidador: [
    check('nome').isLength({ min: 3 }).withMessage('Nome deve ter pelo menos 3 caracteres'),
    check('email').isEmail().withMessage('Email inválido!'),
    check('senha').isStrongPassword({min: 7}).withMessage('Senha muito fraca!')
  ]
}

module.exports = validadores;