var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var security = require('./security/security')
var cron = require('node-cron');
var fs = require('fs');

var indexRouter = require('./routes/index');
var addUserRouter = require('./routes/addUser');
var getJWTRouter = require('./routes/getJWT');
var loginRouter = require('./routes/login');
var jwksRouter = require('./routes/jwks');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//TODO: Add some error checking here.
const rsa1 = () =>  {
    security.getRSAKeypairs().then(handleFulfilled => { 
        app.set('KeySet1', handleFulfilled.keyPair);
        app.set('jwk1', handleFulfilled.jwk);
    });
}

const rsa2 = () => {
    security.getRSAKeypairs().then(handleFulfilled => {
        app.set('KeySet2', handleFulfilled.keyPair);
        app.set('jwk2', handleFulfilled.jwk);
    });
}

rsa1();
rsa2();

cron.schedule('*/5 * * * *', () => {
    rsa1();
    rsa2();
});
    
app.use('/', indexRouter);
app.use('/', addUserRouter);
app.use('/', getJWTRouter);
app.use('/', loginRouter);
app.use('/', jwksRouter);

module.exports = app;
