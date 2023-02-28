var dbapi = require('../dbapi/dbapi');
var forge = require('node-forge');
var jwt = require('jsonwebtoken');
var jose = require('jose');
var app = require('../app');

async function getRSAKeypair() {  
    const { publicKey, privateKey } = await jose.generateKeyPair('RS256');
    const pemPubKey = await jose.exportSPKI(publicKey);
    const pemPrivateKey = await jose.exportPKCS8(privateKey);
    // move this to create JWK endpoint.
    // const pubKeyJwk = await jose.exportJWK(publicKey);
    return { public: pemPubKey, private: pemPrivateKey };
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