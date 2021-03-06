require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
var session = require('express-session');
const headerLogin = require('./middlewares/headerLogin')



const indexRouter = require('./routes/index');
const cadastroRouter = require('./routes/cadastro');
const perfilRouter = require('./routes/perfil');
const loginRouter = require('./routes/login');
const produtosRouter = require('./routes/produtos')


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//habilitando a sessão
app.use(session({
  secret: 'Nerd Geek House',
  resave: true,
  saveUninitialized: true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(headerLogin)




app.use('/', indexRouter);
app.use('/cadastro', cadastroRouter);
app.use('/perfil', perfilRouter);
app.use('/login', loginRouter);
app.use('/produtos', produtosRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

  //cookie de login
  app.use(function(req,res,next){
    if(req.session.usuario == undefined && req.cookies.login != undefined){
      req.session.usuario = req.cookies.login
    }
    next()
  })

module.exports = app;
