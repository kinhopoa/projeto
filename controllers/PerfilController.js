const session = require('express-session')
const PerfilController = {
    index: (req, res) => {
        if (req.session.usuario != undefined){

            res.render('perfilUsuario', {usuario:req.session.usuario})

        } else {
            res.redirect('/login')
        }
    },
    logarUsuario: async (req, res) => {
        let {email, senha, manterlogado} = req.body;
        let usuarioSalvo = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
    
        if(email != usuarioSalvo.email){
            return res.send('Usuario inválido')
        }
    
        if(!bcrypt.compareSync(senha, usuarioSalvo.senha)){
            return res.send('Senha inválida!')
        }
    
        req.session.usuario = usuarioSalvo;

        if(manterlogado != undefined){
            res.cookie('manterlogado', usuarioSalvo.email, {maxAge:600000})
        }
    
        res.redirect('/produtos')
    }
}

module.exports = PerfilController