var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
var fs = require('fs');
var jose = require('jose');

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

const setRSA = async (keySet, jwk) => {
    return new Promise(function(resolve, reject) {
        getRSAKeypairs().then(handleFulfilled => {
            app.set(keySet, handleFulfilled.keyPair);
            app.set(jwk, handleFulfilled.jwk);
            const date = new Date();
            console.log(keySet + ' updated... ' + date.toString());
            return resolve(handleFulfilled.jwk);
        }).catch(error => {
            return reject(error);
        });
    });
}

const updateJWKendpoint = (jwk, jwkToUpdate) => {
    const data = jwk;
    const fileContents = fs.readFileSync('./public/Keys.json', 'utf8');
    var fileJSON = JSON.parse(fileContents);
    fileJSON.keys[jwkToUpdate] = jwk;
    console.log(fileJSON.keys[jwkToUpdate]);
    fs.writeFile('./public/keys.json', JSON.stringify(fileJSON, null, '\t'), (error) => {
        if (error) console.log(error);
    });

}

// Init keypairs
setRSA('KeySet1', 'jwk1').then(handleFulfilled => {
    const jwk = handleFulfilled;
    updateJWKendpoint(jwk, 0);
});
setRSA('KeySet2', 'jwk2').then(handleFulfilled => {
    const jwk = handleFulfilled;
    updateJWKendpoint(jwk, 1);
});

var getRSA1 = cron.schedule('20 * * * *', () => {
    setRSA('KeySet1', 'jwk1').then(handleFulfilled => {
        const jwk = handleFulfilled;
        updateJWKendpoint(jwk, 0);
    });
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});

var getRSA2 = cron.schedule('50 * * * *', () => {
    setRSA('KeySet2', 'jwk2').then(handleFulfilled => {
        const jwk = handleFulfilled;
        updateJWKendpoint(jwk, 1);
    });
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});

var useRSA1 = cron.schedule('* * * * *', () => {
    app.set('switchRSA', true);
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});

var useRSA2 = cron.schedule('* * * * *', () => {
    app.set('switchRSA', false);
}, {
    scheduled: true,
    timezone: "Australia/Melbourne"
});

function startRsaRotation() {
    getRSA1.start();
    getRSA2.start();
    useRSA1.start();
    useRSA2.start();
}

function stopRsaRotation() {
    getRSA1.stop();
    getRSA2.stop();
    useRSA1.stop();
    useRSA2.stop();
}

startRsaRotation();
    
module.exports = app;
