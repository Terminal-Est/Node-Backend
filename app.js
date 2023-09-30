//TODO: Add CORS, react server origin.

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
var security = require('./security/security');
var fileLogging = require('./utils/logging');
var jwtHandler = require('./routes/validateJWT');
var mqttapi = require('./dbapi/mqttapi')
var indexRouter = require('./routes/index');
var addUserRouter = require('./routes/addUser');
var loginRouter = require('./routes/login');
var jwksRouter = require('./routes/jwks');
var testRouter = require('./routes/test');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/', addUserRouter);
app.use('/', loginRouter);
app.use('/', jwksRouter);
app.use('/', jwtHandler.validateJWT, jwtHandler.issueJWT, testRouter);
app.set('switchRSA', true);

mqttapi.pub();

// Init RSA keypairs.
getKeyPair1();
getKeyPair2();

function getKeyPair1() {
    security.getRSAKeypairs().then(handleFulfilled => {
        app.set('KeySet1', handleFulfilled.keyPair);
        app.set('jwk1', handleFulfilled.jwk);
        app.set('onKey2', false);
        security.updateJWKendpoint(handleFulfilled.jwk, 0);
        fileLogging.logToFile('KeySet1 updated');
    }).catch(error => {
        fileLogging.logToFile(error);
    });
}

function getKeyPair2() {
    security.getRSAKeypairs().then(handleFulfilled => {
        app.set('KeySet2', handleFulfilled.keyPair);
        app.set('jwk2', handleFulfilled.jwk);
        app.set('onKey2', true);
        security.updateJWKendpoint(handleFulfilled.jwk, 1);
        fileLogging.logToFile('KeySet2 updated');
    }).catch(error => {
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