function headerLogin (req,res,next) {
    let login = null
    if(req.ression.usuario != undefined){
        login = req.ression.usuario.nome
    }
    res.locals({login:login})
    next()
}

module.exports = headerLogin