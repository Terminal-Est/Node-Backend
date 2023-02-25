var dbapi = require('../dbapi/dbapi');
var forge = require('node-forge');
var jwt = require('jsonwebtoken');

function getRSAKeypair() {
    return new Promise(function(resolve, reject) {
        var rsa = forge.pki.rsa;
        rsa.generateKeyPair({bits: 2048, e: 0x10001}, function(error, keypair) {
            pemKey = {
                public: forge.pki.publicKeyToPem(keypair.publicKey, 72),
                private: forge.pki.privateKeyToPem(keypair.privateKey, 72)
            };
            return error ? reject(error) : resolve(pemKey);
        });
    });
}

async function getAuthJWT(email, privateKey) {
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