const { Usuario } = require('../database/models');
const bcrypt = require('bcryptjs');

const CadastroUsuario = {
    index: (req, res) => {
        const listarUsuarios = Usuario.findAll();

        res.render('cadastroUsuario', { listarUsuarios} )
    },
    store: async (req, res) => {
        const {nome, email, ano_nascimento, senha } = req.body;
        const senhaC = bcrypt.hashSync(senha, 10)

        const usuario = await Usuario.create({
            nome,
            email,
            senha: senhaC,
            ano_nascimento
        })
        console.log(usuario)
        return res.render('cadastroUsuario')
    }

    
}

module.exports = CadastroUsuario;