var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
var security = require('./controllers/securityController');
var fileLogging = require('./utils/logging');
var jwtHandler = require('./routes/validateJWT');

var app = express();

app.use(logger('dev'));
app.use(express.json());
// cors enabled for all routes for now.
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Get index router.
var indexRouter = require('./routes/index');
app.get('/', indexRouter);

// USER routes. Actions on TypeORM user entity.
// -------------------------------------------- 
// Post route for adding User.
var addUserRouter = require('./routes/addUser');
app.post('/user', addUserRouter);

// Put route for updating User.
var updateUserRouter = require('./routes/updateUser');
app.put('/user', updateUserRouter);

// Get route for getting a User.
var getUserRouter = require('./routes/getUser');
app.get('/user', getUserRouter);

// Delete route for deleting a User.
var deleteUserRouter = require('./routes/deleteUser');
app.delete('/user', deleteUserRouter);

// Get login route. Returns a JWT.
var loginRouter = require('./routes/login');
app.get('/login', loginRouter);

// Get router for JWKS.
var jwksRouter = require('./routes/jwks');
app.get('/.well-known/jwks', jwksRouter);

// Test route for dev.
var testRouter = require('./routes/debug');
app.get('/test', testRouter);

// Set app key switchRSA to true.
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