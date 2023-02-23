var dbapi = require('../dbapi/dbapi');
var forge = require('node-forge');
var jose = require('jose');

function getRSAKeypair() {
    return new Promise(function(resolve, reject) {
        var rsa = forge.pki.rsa;
        rsa.generateKeyPair({bits: 2048, e: 0x10001}, function(error, keypair){
            pemKey = {
                public: forge.pki.publicKeyToPem(keypair.publicKey, 72),
                private: forge.pki.privateKeyToPem(keypair.privateKey, 72)
            };
            return error ? reject(error) : resolve(pemKey);
        });
    });
}

function getJWT(secret) {
    
}

module.exports = { getRSAKeypair };