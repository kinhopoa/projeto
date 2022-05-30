
const { Usuario } = require('../database/models')
const cookieLogin = async (req, res, next) => {
    if(req.cookies.manterLogado != undefined && req.session.usuario == null ){
        let email = req.cookies.manterLogado;
        let usuario = await Usuario.findAll();

        if(usuario.email == email){
            req.session.usuario = usuario
        }
    }
    next();
}

module.exports = cookieLogin