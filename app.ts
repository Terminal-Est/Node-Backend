var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
var security = require('./controllers/security');
var fileLogging = require('./utils/logging');
var jwtHandler = require('./routes/validateJWT');
var indexRouter = require('./routes/index');
var addUserRouter = require('./routes/addUser');
var loginRouter = require('./routes/login');
var jwksRouter = require('./routes/jwks');
var testRouter = require('./routes/debug');

var app = express();

app.use(logger('dev'));
app.use(express.json());
// cors enabled for all routes for now.
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/addUser', addUserRouter);
app.use('/login', loginRouter);
app.use('/.well-known', jwksRouter);
app.use('/test', testRouter);
app.set('view engine', 'jade');
app.set('switchRSA', true);

// Init RSA keypairs.
getKeyPair1();
getKeyPair2();

function getKeyPair1() {
    security.getRSAKeypairs().then((handleFulfilled: { keyPair: any; jwk: any; }) => {
        app.set('KeySet1', handleFulfilled.keyPair);
        app.set('jwk1', handleFulfilled.jwk);
        app.set('onKey2', false);
        security.updateJWKendpoint(handleFulfilled.jwk, 0);
        fileLogging.logToFile('KeySet1 updated');
    }).catch((error: any) => {
        fileLogging.logToFile(error);
    });
}

function getKeyPair2() {
    security.getRSAKeypairs().then((handleFulfilled: { keyPair: any; jwk: any; }) => {
        app.set('KeySet2', handleFulfilled.keyPair);
        app.set('jwk2', handleFulfilled.jwk);
        app.set('onKey2', true);
        security.updateJWKendpoint(handleFulfilled.jwk, 1);
        fileLogging.logToFile('KeySet2 updated');
    }).catch((error: any) => {
        fileLogging.logToFile(error);
    });
}

var getRSA1 = cron.schedule('20 * * * *', () => {
    getKeyPair1();
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});            

var getRSA2 = cron.schedule('50 * * * *', () => {
   getKeyPair2();
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});

// TODO: Add admin path for stopping starting RSA rotation
function startRsaRotation() {
    getRSA1.start();
    getRSA2.start();
}

function stopRsaRotation() {
    getRSA1.stop();
    getRSA2.stop();
}

// Start RSA rotation.
startRsaRotation();
    
module.exports = app;