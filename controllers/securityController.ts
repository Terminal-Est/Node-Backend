import { getUserEmail, getUserPassword } from "./userController";
import { Password } from "../data/entity/password";
import { User } from "../data/entity/user";
import { logToFile } from "../utils/logging";
import { writeFileSync, readFileSync } from "fs";
import { compare } from 'bcrypt';
var jose = require('jose');

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
async function verifyToken(jwt: any, jwk1: any, jwk2: any) {
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
    return { payload: payload, header: protectedHeader};
}

// Issue new JWT.
function getAuthJWT(uuid: string, key: any, kid: any, exp: any) {
    const alg = 'RS256';
    return new Promise(async function(resolve, reject) {
        const privateKey = await jose.importPKCS8(key, alg);
        await new jose.SignJWT({ 'iat': true, 'sub': true, 'exp': true, 'kid': kid })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setSubject(uuid)
        .setExpirationTime(exp)
        .sign(privateKey)
        .then((handleFulfilled : any) => { 
            return resolve(handleFulfilled); 
        }, (handleRejected : any) => {
            return reject(handleRejected);
        });
    });
}

// Update exposed JWKs.
function updateJWKendpoint(jwk: any, jwkToUpdate: any) {
    try {
        const fileContents = readFileSync('./public/Keys.json', 'utf8');
        var fileJSON = JSON.parse(fileContents);
        fileJSON.keys[jwkToUpdate] = jwk;
        writeFileSync('./public/Keys.json', JSON.stringify(fileJSON, null, '\t'));
    } catch {
        logToFile("Failed to write key to endpoint : " + Date.now.toString());
    }
}

// Function to validate user details against database.
async function userLogin(email: string, password : string) {
    var userPwd: Password | null;
    var userExists: boolean = false;
    var passwordValid: boolean = false;
    var uuid: string;

    const user: any = await getUserEmail(email).then((handleFulfilled) => {
        return handleFulfilled;
    }, (handleRejected) => {
        return handleRejected;
    });
    
    if (user != null) {
        var userPwd: Password | null = await getUserPassword(user.uuid).then((data: Password | null) =>{
            return data;
        });

        if (userPwd != null) {  
            userExists = true;
            uuid = userPwd.uuid.toString();
            passwordValid = await compare(password, userPwd.passHash);
        }
    }

    return new Promise<User>(function(resolve, reject) {
        if (!userExists){
            return reject("Invalid User.");

        } else if (userExists && !passwordValid) {
            return reject("Invalid Password");

        } else {
            return resolve(user);
        }
    });
}

export { getAuthJWT, 
    verifyToken, 
    getRSAKeypairs, 
    updateJWKendpoint, 
    userLogin };