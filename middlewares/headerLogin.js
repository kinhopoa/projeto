function headerLogin (req,res,next) {
    let login = null
    if(req.session.usuario != undefined){
        login = req.session.usuario.nome
    }
    res.locals.login = login;
    next()
}

module.exports = headerLogin