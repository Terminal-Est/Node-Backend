// Middleware routes for validating JWTS.
import { NextFunction, Request, Response } from "express";
import { verifyToken, getAuthJWT } from "../controllers/securityController";
var logFile = require('../utils/logging');

// TODO: Thorough unit testing to validate proper rotation mechanisms.
// TODO: Add fault codes for front end.
// First validate user JWT, if any error occours, send appropriate repsonse.
// These may be split off into independent routes later if independent JWT validation is required.
const validateJWT = (req: Request, res: Response, next: NextFunction) => {

    var uuid: string;

    if (res.locals.uuid) {
        uuid = String(res.locals.uuid);
    } else {
        uuid = String(req.body.uuid);
        res.locals.uuid = uuid;
        console.log(uuid);
    }

    const jwt = req.headers.authorization;
    const jwk1 = req.app.get('jwk1');
    const jwk2 = req.app.get('jwk2');
    verifyToken(jwt, jwk1, jwk2).then((handleFulfilled : any) => {
        const payload = handleFulfilled.payload;
        if (uuid != String(payload.sub)) {
            res.status(400).json({
                Message: "JWT User Mismatch."
            });
        } else {
            res.locals.exp = payload.exp;
            next();
        }
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
        logFile.logToFile(error);
    });
}

// TODO: Add fault codes for front end.
// After validiation, issue new JWT. 
const issueJWT = (req: Request, res: Response, next: NextFunction) => {
    const uid = res.locals.uuid;
    const exp = res.locals.exp;
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
    getAuthJWT(uid, keySet.private, kid, exp).then((handleFulfilled : any) => {
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
    });
}

module.exports = { validateJWT, issueJWT };