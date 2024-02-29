var security = require('../security/security')
import { NextFunction, Request, Response } from "express";
var logFile = require('../utils/logging')

// TODO: Thorough unit testing to validate proper rotation mechanisms.
// TODO: Add fault codes for front end.
// First validate user JWT, if any error occours, send appropriate repsonse.
const validateJWT = function(req : Request, res : Response, next : NextFunction) {
    const jwt = req.headers.authorization;
    const jwk1 = req.app.get('jwk1');
    const jwk2 = req.app.get('jwk2');
    security.verifyToken(jwt, jwk1, jwk2).then((handleFulfilled : any) => {
        const payload = handleFulfilled.payload;
        res.locals.uid = payload.sub;
        next();
    }, (handleRejected : any) => {
        res.status(400).json({
            "Message": "Jwt failed to validate",
            "Payload": handleRejected
        });
    }).catch((error : {message : any}) => {
        res.status(500).json({
            "Message": "Exception whilst processing jwt.",
            "Exception": error
        });
        logFile.logToFile(error);
    });
}

// TODO: Add fault codes for front end.
// After validiation, issue new JWT. 
const issueJWT = function(req : Request, res : Response, next : NextFunction) {
    const uid = res.locals.uid;
    var jwk;
    var keySet;
    var kid;
    if (req.app.get('onKey2')) {
        keySet = req.app.get('KeySet2');
        jwk = req.app.get('jwk2');
        kid = jwk.kid;
    } else {
        keySet = req.app.get('KeySet1');
        jwk = req.app.get('jwk1');
        kid = jwk.kid;
    }
    security.getAuthJWT(uid, keySet.private, kid).then((handleFulfilled : any) => {
        res.locals.jwt = handleFulfilled;
        next();  
    }, (handleRejected : any) => {
        res.status(400).json({
            "Message": "Token Generation Error",
            "Payload": handleRejected
        })
    }).catch((error : {message : any}) => {
        res.status(500).json({
            "Message": "Exception whilst generating token.",
            "Exception": error
        });
        logFile.logToFile(error);
    });
}

module.exports = { validateJWT, issueJWT };