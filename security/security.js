var dbapi = require('../dbapi/dbapi');
var forge = require('node-forge');
var jwt = require('jsonwebtoken');
var jose = require('jose');

function getRSAKeypair() {
    return new Promise(function(resolve, reject) {
        async function getKeypair() {
            const { publicKey, privateKey } = await jose.generateKeyPair('RS256');
            const pemKey = {
                publicKey: publicKey,
                privateKey: privateKey
            }
            return error ? reject(error) : resolve(pemKey);
        }       
    });
}


function getAuthJWT(email, privateKey) {
    return new Promise(function(resolve, reject) {
        jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60,
            sub: email,
            iat: Math.floor(Date.now() / 1000)
        },
        privateKey,
        {
            algorithm: 'RS256'
        },
        function(error, token) {
            return error ? reject(error) : resolve(token);
        }
        );
    })
}

module.exports = { getRSAKeypair, getAuthJWT };