var dbapi = require('../dbapi/dbapi');
var jwt = require('jsonwebtoken');
var jose = require('jose');
var app = require('../app');

async function verifyToken(jwt, jwk) {
    try {
        const alg = 'RS256';
        const decodedJwt = jose.decodeJwt(jwt);
        const kid = decodedJwt.kid;
        const jwk1 = app.get('jwk1');
        const jwk2 = app.get('jwk2');
        const publicKey = await jose.importJWK(jwk, alg); 
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

module.exports = { refreshAuthJWT, verifyToken };