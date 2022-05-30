const { check, body } = require('express-validator');


let validateRegister = [
    check('email').isEmail().withMessage('Email inválido').bail()
    .notEmpty().withMessage('Deve preencher o email').bail(),

    check('senha').isLength({min: 7}).withMessage('A senha deve ser maior!').bail()
    .notEmpty().withMessage('Deve preencher a senha').bail(),

    check('nome').isLength({min:5}).withMessage('O nome deve ter no mínimo 5 caracteres').bail()
    .notEmpty().withMessage('O nome não pode ficar vazio'),

    check('ano_nascimento').isDate().withMessage('Data de nascimento inválida!')
    .notEmpty().withMessage('A data não pode ficar vazia'),

    /*body("email").custom((email) => {
        let usuario = async (req, res) => {

            return usuario.email != email
        }
    }).withMessage("O usuario já existe")
*/
];

module.exports = validateRegister;