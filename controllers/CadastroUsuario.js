const { Usuario } = require('../database/models');
const { check, validationResult, body }= require('express-validator')
const bcrypt = require('bcryptjs');

const CadastroUsuario = {
    index: (req, res) => {
        const listarUsuarios = Usuario.findAll();

        res.render('cadastroUsuario', { listarUsuarios } )
    },
    store: async (req, res) => {
        let listaDeErrors = validationResult(req);
        if (listaDeErrors.isEmpty()){
        const {nome, email, ano_nascimento, senha} = req.body;
        const senhaC = bcrypt.hashSync(senha, 10)

        const usuario = await Usuario.create({
            nome,
            email,
            senha: senhaC,
            ano_nascimento
        })
        console.log(usuario)
        return res.render('cadastroUsuario')
    } else {
        return res.render('cadastroUsuario', {errors: listaDeErrors.errors})
    
    }

   
    
}
}

module.exports = CadastroUsuario;