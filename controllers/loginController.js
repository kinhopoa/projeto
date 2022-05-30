const { Usuario } = require('../database/models')
const bcrypt = require('bcryptjs');
const {check, validationResult, body} = require('express-validator')
const session = require('express-session');

const loginController = {
    index: (req, res ) => {
        res.render('login')
    },
   logarUsuario: async(req, res) => {
       const {email, senha} = req.body;
       const usuario = await Usuario.findOne({
           where: {
               email: email
           }
        })

       if(!usuario){
        return res.render('login',{error: true})
    }

    else if(!bcrypt.compareSync(senha, usuario.senha)){
        return res.render('login',{error: true})
    }

    else if(bcrypt.compareSync(senha, usuario.senha)){
       req.session.usuario = usuario;
        if (req.body.manterLogado == "ManterLogado"){
            res.cookie('login',usuario,{maxAge:9999999999})
        }
       res.redirect('/perfil')
    }
}
}


module.exports = loginController;