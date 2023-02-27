var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var security = require('./security/security')
var cron = require('node-cron');
var jose = require('jose');

var indexRouter = require('./routes/index');
var addUserRouter = require('./routes/addUser');
var getJWTRouter = require('./routes/getJWT');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const rsa = () =>  {
    security.getRSAKeypair().then(handleFullfilled => {
        app.set('RSAPubKey', handleFullfilled.public);
        app.set('RSAPrivKey', handleFullfilled.private);
        console.log(app.get('RSAPubKey'));
        async function getJwk() {
            //const array = new Uint8Array(handleFullfilled.rawPublic.n.data);
            //const jwk = await jose.exportJWK(array);
            //console.log(jwk);
        }
        getJwk();
    }, handleRejected => {
        console.log(handleRejected);
    })
}

rsa();

cron.schedule('*/2 * * * *', () => {
    rsa();
});
    
app.use('/', indexRouter);
app.use('/', addUserRouter);
app.use('/', getJWTRouter);

module.exports = app;
