var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bicicletasAPIRouter = require('./routes/api/bicicletas');

var app = express();

//SWAGGER
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Bicicletas Express API with Swagger",
      version: "0.1.0",
      description:
        "API para gestionar bicicletas utilizando Express y documentada con Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Kevin Armero",
        url: "https://laK.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "https://a27-apirest-mvc.onrender.com",
        description: "Servidor Render"
      },
      {
        url: "http://localhost:3000",
        description: "Servidor local"
      },
    ],
  },
  apis: ["./routes/**/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//If there are several versions of the API, /api/v1/bicicletas is usually used
app.use('/api/bicicletas', bicicletasAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
