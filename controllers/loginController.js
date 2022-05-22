const {Usuario} = require('../database/models')
const bcrypt = require('bcryptjs');

const loginController = {
   logarUsuario: async(req, res) => {
       let {email, senha} = req.body;
       const usuario = await Usuario.find(usuario => usuario.email === email);

       if(!usuario){
           return res.render('login')
       }

       if(!bcrypt.compareSync(senha, usuario.senha)){
           return res.render('login')
       }

       req.session.usuario = usuario;

       res.redirect('/perfil')
}
}


module.exports = loginController;