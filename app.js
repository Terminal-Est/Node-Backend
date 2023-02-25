var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var security = require('./security/security')
var cron = require('node-cron');

var indexRouter = require('./routes/index');
var addUserRouter = require('./routes/addUser');
var getJWTRouter = require('./routes/getJWT');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

security.getRSAKeypair().then(keys => {
    app.set('RSAPubKey', keys.public);
    app.set('RSAPrivKey', keys.private);
}, error => {
    console.log(error);
})

cron.schedule('*/2 * * * *', () => {
    security.getRSAKeypair().then(handleFullfilled => {
        app.set('RSAPubKey', handleFullfilled.public);
        app.set('RSAPrivKey', handleFullfilled.private);
    }, handleRejected => {
        console.log(handleRejected);
    })
});
    
app.use('/', indexRouter);
app.use('/', addUserRouter);
app.use('/', getJWTRouter);

module.exports = app;
