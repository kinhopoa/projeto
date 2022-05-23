const { check, validationResult, body } = import ('express-validator');

const validateRegister = [
    check()
        .notEmpty().withMessage('Preencha todos os campos. ').bail(),
    check('nome','username','name')  
       // .notEmpty().withMessage('Deve Preencher o nome.').bail()
        .isLenght({ min : 5}).withMessage('Nome precisa ter pelo menos 5 caracteres. ').bail()
        .isLenght({ max : 20}).withMessage('Nome precisa ter no maximo 20 caracteres. ').bail(),
    check('email','Email')
       // .notEmpty().withMessage('Deve Preencher o email.').bail()
        .isEmail().withMessage('Insira um email valido. '),
    check('senha','password')
       // .notEmpty().withMessage('Deve Preencher a senha.').bail()
        .isLenght({ min : 6}).withMessage('Senha precisa ter pelo menos 6 caracteres. ').bail()
        .isLenght({ max : 50}).withMessage('Senha precisa ter no maximo 50 caracteres. ').bail(),
    check('confirm-senha','confirm-password','confirmarSenha')
        .equals('senha','password').withMessage('Confirme sua senha. ').bail(),
    check('data-de-nascimento','date','data','ano_nascimento')
       // .notEmpty().withMessage('Insira uma data.').bail()
        .isDate({format: 'DD/MM/YYYY'}).withMessage('Insira uma data valida.(exemplo:01/01/2000) ')
    
];

module.exports = validateRegister;