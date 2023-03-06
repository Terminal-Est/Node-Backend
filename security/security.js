var dbapi = require('../dbapi/dbapi');
var jose = require('jose');

async function verifyToken(jwt, jwk) {
    try {
        const alg = 'RS256';
        const decodedJwt = jose.decodeJwt(jwt);
        const kid = decodedJwt.kid;
        const publicKey = await jose.importJWK(jwk, alg); 
        const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey);
        return { payload: payload, header: protectedHeader };
    } catch(error) {
        throw error;
    }
}

async function refreshAuthJWT(email, key) {
    const alg = 'RS256';
    const pks8 = key;
    const privateKey = await jose.importPKCS8(pks8, alg);
    return new Promise(async function(resolve, reject) {
        await new jose.SignJWT({ 'iat': true, 'sub': true, 'exp': true })
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

module.exports = { refreshAuthJWT, verifyToken };