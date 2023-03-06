var dbapi = require('../dbapi/dbapi');
var jose = require('jose');
var fs = require('fs');

function getRSAKeypairs() { 
    return new Promise(async function(resolve){
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
        return resolve({ keyPair: keyPair, jwk: pubKeyJwk });
    }); 
}

async function verifyToken(jwt, jwk1, jwk2) {
    var jwk;
    const alg = 'RS256';
    const decodedJwt = jose.decodeJwt(jwt);
    const kid = decodedJwt.kid;
    if (kid == jwk1.kid) {
        jwk = jwk1
    } else {
        jwk = jwk2
    }
    const publicKey = await jose.importJWK(jwk, alg);
    const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey);
    return { payload: payload, header: protectedHeader };
}

function refreshAuthJWT(email, key, kid) {
    const alg = 'RS256';
    return new Promise(async function(resolve, reject) {
        const privateKey = await jose.importPKCS8(key, alg);
        await new jose.SignJWT({ 'iat': true, 'sub': true, 'exp': true, 'kid': kid })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setSubject(email)
        .setExpirationTime('30m')
        .sign(privateKey)
        .then(handleFulfilled => { 
            resolve(handleFulfilled); 
        }, handleRejected => {
            reject(handleRejected);
        })
    })
}

function updateJWKendpoint (jwk, jwkToUpdate) {
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

module.exports = { refreshAuthJWT, verifyToken, getRSAKeypairs, updateJWKendpoint };