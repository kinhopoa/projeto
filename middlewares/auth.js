function auth(req, res, next){
    if(!req.session.usuario){
        return res.redirect('/login')
    }
    else{
        return next();
    }
}

module.exports = auth;