var dbapi = require('../dbapi/dbapi');
var jwt = require('jsonwebtoken');
var jose = require('jose');

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

async function verifyToken(jwt, jwk) {
    try {
        const alg = 'RS256';
        const decodedJwt = jose.decodeJwt(jwt);
        const kid = decodedJwt.kid;
        
        const publicKey = await jose.importJWK(jwk, 'RS256'); 
        const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey);
        
        return { payload: payload, header: protectedHeader };
    } catch(error) {
        throw error;
    }
}

function refreshAuthJWT(email, privateKey, kid) {
    return new Promise(function(resolve, reject) {
        jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            sub: email,
            iat: Math.floor(Date.now() / 1000),
            kid: kid
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

module.exports = { getRSAKeypairs, refreshAuthJWT, verifyToken };