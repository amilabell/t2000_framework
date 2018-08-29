//importing node modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

//importing routers
var countriesRouter = require('./routes/countries');
var dimsRouter = require('./routes/dims');
var prefsRouter = require('./routes/prefs');
var scoreRouter = require('./routes/score');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/countries', countriesRouter);
app.use('/dims', dimsRouter);
app.use('/prefs', prefsRouter);
app.use('/score', scoreRouter);

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
