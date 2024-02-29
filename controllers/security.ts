var user = require('../controllers/userController');
var fileLogging = require('../utils/logging');
var jose = require('jose');
var fs = require('fs');
var bcrypt = require('bcrypt');

// Return RSA Keypair.
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

// Process JWT signature.
async function verifyToken(jwt : any, jwk1 : any, jwk2 : any) {
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

// Issue new JWT.
function getAuthJWT(email : string, key : any, kid : any) {
    const alg = 'RS256';
    return new Promise(async function(resolve, reject) {
        const privateKey = await jose.importPKCS8(key, alg);
        await new jose.SignJWT({ 'iat': true, 'sub': true, 'exp': true, 'kid': kid })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setSubject(email)
        .setExpirationTime('30m')
        .sign(privateKey)
        .then((handleFulfilled : any) => { 
            resolve(handleFulfilled); 
        }, (handleRejected : any) => {
            reject(handleRejected);
        })
    })
}

// Update exposed JWKs.
function updateJWKendpoint(jwk : any, jwkToUpdate : any) {
    const data = jwk;
    try {
        const fileContents = fs.readFileSync('./public/Keys.json', 'utf8');
        var fileJSON = JSON.parse(fileContents);
        fileJSON.keys[jwkToUpdate] = jwk;
        fs.writeFileSync('./public/Keys.json', JSON.stringify(fileJSON, null, '\t'));
    } catch (e) {
        fileLogging.logToFile(e);
    }
}

// Function to validate user details against database.
async function userLogin(userId : string, password : string) {
    userId = userId;
    password = password;
    var invalidUser = false;
    const res = await user.getUser(userId).then((data : any) => {
        return data;
    });
    if (res[0] == null) {
        invalidUser = true;
    } else {
        var compResult = await bcrypt.compare(password, res[0].pass_hash);
    };
    return new Promise(function(resolve, reject) {
        if (invalidUser) {
            reject({message: "Invalid user."});
        } else if (!invalidUser && compResult) {
            resolve({login: true});
        } else if (!invalidUser && !compResult) {
            reject({message: "Invalid password."});
        }
    });
}

module.exports = { getAuthJWT, verifyToken, getRSAKeypairs, updateJWKendpoint, userLogin };