const { Usuario } = require('../database/models')

const CadastroUsuario = {
    index: (req, res) => {
        const listarUsuarios = Usuario.findAll();

        res.render('cadastroUsuario', { listarUsuarios} )
    },
    store: async (req, res) => {
        const {nome, email, ano_nascimento } = req.body;

        const usuario = await Usuario.create({
            nome,
            email,
            ano_nascimento
        })
        console.log(usuario)
        return res.render('cadastroUsuario')
    }

    
}

module.exports = CadastroUsuario;