var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
var fs = require('fs');
var jose = require('jose');
var security = require('./security/security');
var fileLogging = require('./utils/logging');

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

app.use('/', indexRouter);
app.use('/', addUserRouter);
app.use('/', getJWTRouter);
app.use('/', loginRouter);
app.use('/', jwksRouter);

app.set('switchRSA', true);

async function getRSAKeypairs() {  
    const keys = async () => {
        const { publicKey, privateKey } = await jose.generateKeyPair('RS256');
        return { publicKey, privateKey };
    } 
    const keySet = await keys();
    const pemPubKey = await jose.exportSPKI(keySet.publicKey);
    const pemPrivateKey = await jose.exportPKCS8(keySet.privateKey);
    const pubKeyJwk = await jose.exportJWK(keySet.publicKey);
    pubKeyJwk.kid = await jose.calculateJwkThumbprint(pubKeyJwk, 'sha256');
    pubKeyJwk.alg = 'RS256';
    const keyPair = {
        public: pemPubKey,
        private: pemPrivateKey
    }
    return { keyPair: keyPair, jwk: pubKeyJwk };
}

const getRSA = async () => {
    return new Promise(function(resolve, reject) {
        getRSAKeypairs().then(handleFulfilled => {
            return resolve(handleFulfilled);
        }).catch(error => {
            return reject(error);
        });
    });
}

const updateJWKendpoint = (jwk, jwkToUpdate) => {
    const data = jwk;
    try {
        const fileContents = fs.readFileSync('./public/Keys.json', 'utf8');
        var fileJSON = JSON.parse(fileContents);
        fileJSON.keys[jwkToUpdate] = jwk;
        fs.writeFileSync('./public/keys.json', JSON.stringify(fileJSON, null, '\t'));
    } catch (e) {
        fileLogging.logToFile(e);
    }
}

// Init keypairs
getRSA().then(handleFulfilled => {
    app.set('KeySet1', handleFulfilled.keyPair);
    app.set('jwk1', handleFulfilled.jwk);
    updateJWKendpoint(handleFulfilled.jwk, 0);
    fileLogging.logToFile('KeySet1 updated');
    const keyPair = app.get('KeySet1');
    security.refreshAuthJWT('foo@bar.com', keyPair.private).then(handleFulfilled => {
        fileLogging.logToFile(handleFulfilled); 
    });  
}).catch(error => {
    fileLogging.logToFile(error);;
});

getRSA().then(handleFulfilled => {
    app.set('KeySet2', handleFulfilled.keyPair);
    app.set('jwk2', handleFulfilled.jwk);
    updateJWKendpoint(handleFulfilled.jwk, 1);
    fileLogging.logToFile('KeySet1 updated');
}).catch(error => {
    fileLogging.logToFile(error);;
});

var getRSA1 = cron.schedule('20 * * * *', () => {
    getRSA().then(handleFulfilled => {
        app.set('KeySet1', handleFulfilled.keyPair);
        app.set('jwk1', handleFulfilled.jwk);
        updateJWKendpoint(handleFulfilled.jwk, 0);
        fileLogging.logToFile('KeySet1 updated');
    }).catch(error => {
        fileLogging.logToFile(error);;
    });
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});

var getRSA2 = cron.schedule('50 * * * *', () => {
    getRSA().then(handleFulfilled => {
        app.set('KeySet1', handleFulfilled.keyPair);
        app.set('jwk1', handleFulfilled.jwk);
        updateJWKendpoint(handleFulfilled.jwk, 0);
        fileLogging.logToFile('KeySet1 updated');
        const keyPair = app.get('KeySet1');
        const token = security.refreshAuthJWT('foo@bar.com', keyPair.private, handleFulfilled.kid);
        fileLogging.logToFile(token);
    }).catch(error => {
        fileLogging.logToFile(error);;
    });
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

startRsaRotation();
    
module.exports = app;