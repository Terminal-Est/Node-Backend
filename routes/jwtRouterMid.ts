// Middleware routes for validating JWTS.
import { NextFunction, Request, Response } from "express";
import { verifyToken, getAuthJWT } from "../controllers/securityController";
var logFile = require('../utils/logging');

// TODO: Thorough unit testing to validate proper rotation mechanisms.
// TODO: Add fault codes for front end.
// First validate user JWT, if any error occours, send appropriate repsonse.
// These may be split off into independent routes later if independent JWT validation is required.
const validateJWT = (req : Request, res : Response, next : NextFunction) => {
    const jwt = req.headers.authorization;
    const uuid: string = String(req.query.uuid);
    const jwk1 = req.app.get('jwk1');
    const jwk2 = req.app.get('jwk2');
    
    verifyToken(jwt, uuid, jwk1, jwk2).then((handleFulfilled : any) => {
        const payload = handleFulfilled.payload;
        res.locals.uuid = payload.sub;
        next();
    }, (handleRejected : any) => {
        res.status(400).json({
            Message: "Jwt Failed To Validate",
            Payload: handleRejected
        });
    }).catch((error: any) => {
        res.status(500).json({
            Message: "Exception Whilst Processing JWT",
            Exception: error
        });
    });
}

// TODO: Add fault codes for front end.
// After validiation, issue new JWT. 
const issueJWT = (req: Request, res: Response, next: NextFunction) => {
    const uid = res.locals.uuid;
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
    getAuthJWT(uid, keySet.private, kid).then((handleFulfilled : any) => {
        res.locals.jwt = handleFulfilled;
        next();  
    }, (handleRejected : any) => {
        res.status(400).json({
            Message: "Token Generation Error",
            Payload: handleRejected
        })
    }).catch((error: any) => {
        res.status(500).json({
            Message: "Exception Whilst Generating Token",
            Exception: error
        });
        logFile.logToFile(error);
    });
}

module.exports = { validateJWT, issueJWT };