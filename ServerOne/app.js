var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var simpleCookieRouter = require('./routes/simpleCookie');
var sessionAndPermanentCookieRouter = require('./routes/sessionAndPermanentCookie');
var httpOnlyCookieRouter = require('./routes/httpOnlyCookie');
var secureCookieRouter = require('./routes/secureCookie');
var domainCookieRouter = require('./routes/domainCookie');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/simpleCookie', simpleCookieRouter);
app.use('/sessionAndPermanentCookie', sessionAndPermanentCookieRouter);
app.use('/httpOnlyCookie', httpOnlyCookieRouter);
app.use('/secureCookie', secureCookieRouter);
app.use('/domainCookie', domainCookieRouter);

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

module.exports = app;
