const { Usuario } = require('../database/models')
const bcrypt = require('bcryptjs');
const {check, validationResul, body} = require('express-validator')

const loginController = {
    index: (req, res ) => {
        res.render('login')
    },
   logarUsuario: async(req, res) => {
       const {email, senha} = req.body;
       const usuario = await Usuario.findOne({
           options: {where: {email: req.body.email} }
        })

       if(!usuario){
        return res.render('login',{error: true})
    }

    else if(await !bcrypt.compareSync(senha, usuario.senha)){
        return res.render('login',{error: true})
    }

    else if(await bcrypt.compareSync(senha, usuario.senha)){
       req.session.usuario = usuario;
        if (req.body.manterLogado == "ManterLogado"){
            res.cookie('login',usuario,{maxAge:9999999999})
        }
       res.redirect('/perfil')
    }
}
}


module.exports = loginController;