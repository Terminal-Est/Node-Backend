import { NextFunction, Request, Response } from "express";
import { userLogin, getAuthJWT } from "../controllers/securityController";
import { logToFile } from "../utils/logging";
import { User } from "../data/entity/user";
var express = require('express');
var router = express.Router();

/**
 * Login route requires form data userId and password.
 * First validates user against database, if user is valid, respond with JWT.
 * If user email is not authorized, respond with message.
 * If user is banned, respond with message.
 */

// First validate user against database.
router.use((req: Request, res: Response, next: NextFunction) => {

    const email = req.body.email;
    const pass = req.body.password;
    var jwk;
    var keySet;
    var kid;

    userLogin(email, pass).then((handleFulfilled: User) => {

        if (!handleFulfilled.auth) {
            res.status(400).json({
                Message: "Email not validated. Check your E-mail Inbox and Spam folders for validation E-mail."
            });
            
        } else {

            if (handleFulfilled.banned) {
                res.status(400).json({
                    Message: "You are banned! Contact GreenTik Administration."
                });

            } else {

                if(req.app.get('onKey2')) {
                    keySet = req.app.get('KeySet2');
                    jwk = req.app.get('jwk2');
                    kid = jwk.kid;
                } else {
                    keySet = req.app.get('KeySet1');
                    jwk = req.app.get('jwk1');
                    kid = jwk.kid;
                }
        
                res.locals.email = email;
                res.locals.jwk = jwk;
                res.locals.keySet = keySet;
                res.locals.kid = kid;
                res.locals.uuid = handleFulfilled.uuid;
        
                next();
            }
        }
    }, (handleRejected: string) => {
        res.status(400).json({
            Message: "Login Failed.",
            Detail: handleRejected
        });
    }).catch((error: any) => {
        res.status(500).json({
            Message: "Login Exception.",
            Exception: error
        });
    });
});

// Next generate JWT.
router.use((req: Request, res: Response, next: NextFunction) => {
    
    const email = res.locals.uuid;
    const keySet = res.locals.keySet;
    const kid = res.locals.kid;
    var exp: string;
    const remember: boolean = Boolean(req.body.remember);

    if (remember) {
        exp = '30d'
    } else {
        exp = '30m';
    }

    getAuthJWT(email, keySet.private, kid, exp).then((handleFulfilled: any ) => {
        res.locals.jwt = handleFulfilled;
        next(); 
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Token Generation Error.",
            Detail: handleRejected
        })
    }).catch((error: any) => {
        res.status(500).json({
            Message: "Exception Whilst Generating Token.",
            Detail: error
        });
        logToFile(error);
    });
});

router.use((req: Request, res: Response) => {

    const jwt = res.locals.jwt;

    res.status(200).json({
        Message: "Login Successful.",
        uuid: res.locals.uuid,
        Token: jwt
    }); 
});

module.exports = router;