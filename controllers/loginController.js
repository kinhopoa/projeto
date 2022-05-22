const { Usuario } = require('../database/models')
const bcrypt = require('bcryptjs');

const loginController = {
    index: (req, res ) => {
        res.render('login')
    },
   logarUsuario: async(req, res) => {
       const {email, senha} = req.body;
       const usuario = await Usuario.findOne({email:email})

       if(!usuario){
        return res.render('login')
    }

    if(!bcrypt.compareSync(senha, usuario.senha)){
        return res.render('login')
    }

       req.session.usuario = usuario;

       res.redirect('perfil')
}
}


module.exports = loginController;