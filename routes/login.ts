import { NextFunction, Request, Response } from "express";
import { userLogin, getAuthJWT } from "../controllers/security";
import { logToFile } from "../utils/logging";
var express = require('express');
var router = express.Router();

// First validate user against database.
router.use((req: Request, res: Response, next: NextFunction) => {
    const uid = req.body.userId;
    const pass = req.body.password;
    userLogin(uid, pass).then((handleFulfilled: any) => {
       
        var jwk;
        var keySet;
        var kid;
        if(req.app.get('onKey2')) {
            keySet = req.app.get('KeySet2');
            jwk = req.app.get('jwk2');
            kid = jwk.kid;
        } else {
            keySet = req.app.get('KeySet1');
            jwk = req.app.get('jwk1');
            kid = jwk.kid;
        }
        res.locals.uid = uid;
        res.locals.jwk = jwk;
        res.locals.keySet = keySet;
        res.locals.kid = kid;
        next();
       
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Login Failed",
            Detail: handleRejected
        });
    }).catch((error: any) => {
        res.status(500).json({
            Message: "Login Exception",
            Exception: error
        });
    });
});

// Next generate JWT.
router.use((req: Request, res: Response, next: NextFunction) => {
    
    const uid = res.locals.uid;
    const keySet = res.locals.keysSet;
    const kid = res.locals.kid;

    getAuthJWT(uid, keySet.private, kid).then((handleFulfilled: any ) => {
        res.locals.jwt = handleFulfilled;
        next(); 
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Token Generation Error",
            Detail: handleRejected
        })
    }).catch((error: any) => {
        res.status(500).json({
            Message: "Exception Whilst Generating Token",
            Detail: error
        });
        logToFile(error);
    });
});

/**
 * Login route requires form data userId and password.
 * 
 * First validates user against database, if user is valid, respond with JWT.
 */
router.get('/', (req: Request, res: Response) => {

    const jwt = res.locals.jwt;

    res.status(200).json({
        Message: "Login Successful",
        Token: jwt
    }); 
});

module.exports = router;