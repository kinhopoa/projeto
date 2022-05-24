const session = require('express-session')
const PerfilController = {
    index: (req, res) => {
        if (req.session.usuario != undefined){

            res.render('perfilUsuario',{usuario:req.session.usuario})

        } else {
            res.redirect('login')
        }
    }
}

module.exports = PerfilController