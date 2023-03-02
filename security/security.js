var dbapi = require('../dbapi/dbapi');
var jwt = require('jsonwebtoken');
var jose = require('jose');
var fs = require('fs');

async function getRSAKeypair() {  
    const { publicKey1, privateKey1 } = await jose.generateKeyPair('RS256');
    const { publicKey2, privateKey2 } = await jose.generateKeyPair('RS256');
    const pemPubKey1 = await jose.exportSPKI(publicKey1);
    const pemPrivateKey1 = await jose.exportPKCS8(privateKey1);
    const pemPubKey2 = await jose.exportSPKI(publicKey2);
    const pemPrivateKey2 = await jose.exportPKCS8(privateKey2);
    const pubKeyJwk1 = await jose.exportJWK(publicKey1);
    const pubKeyJwk2 = await jose.exportJWK(publicKey2);
    pubKeyJwk1.kid = await jose.calculateJwkThumbprint(pubKeyJwk, 'sha256');
    pubKeyJwk2.kid = await jose.calculateJwkThumbprint(pubKeyJwk, 'sha256');

    const keySet1 = {
        public: 
    }

    return ;
}

async function verifyToken(jwt, spki) {
    const alg = 'RS256';
    try {
        const publicKey = await jose.importSPKI(spki, alg);
        const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey);
        return { payload: payload, header: protectedHeader };
    } catch(error) {
        throw error;
    }
}
           
function refreshAuthJWT(email, privateKey) {
    return new Promise(function(resolve, reject) {
        jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            sub: email,
            iat: Math.floor(Date.now() / 1000)
        },
        privateKey,
        {
            algorithm: 'RS256'
        },
        function(error, token) {
            return error ? reject(error) : resolve(token);
        });
    })
}

module.exports = { getRSAKeypair, refreshAuthJWT, verifyToken };