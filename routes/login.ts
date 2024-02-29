var express = require('express');
import { NextFunction, Request, Response } from "express";
var logFile = require("../utils/logging")
var security = require('../security/security');
var router = express.Router();

router.get('/login', function(req : Request, res : Response) {
    const uid = req.body.userId;
    const pass = req.body.password;
    security.userLogin(uid, pass).then((handleFulfilled : any)=> {
        if (handleFulfilled.login) {
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
            security.getAuthJWT(uid, keySet.private, kid).then((handleFulfilled : any ) => {
                res.locals.jwt = handleFulfilled;
                res.status(200).json({
                    "Message": "Login Successful",
                    "token": handleFulfilled
                });  
            }, (handleRejected : any) => {
                res.status(400).json({
                    "Message": "Token Generation Error",
                    "Payload": handleRejected
                })
            }).catch((error: {message : any}) => {
                res.status(500).json({
                    "Message": "Exception whilst generating token.",
                    "Exception": error
                });
                logFile.logToFile(error);
            });
        } else {
            res.status(400).json({
                "Message": "Login Failed"
            });
        }
    }, (handleRejected : any) => {
        res.status(400).json({
            "Message": handleRejected
        });
    }).catch((error: {message : any}) => {
        res.status(500).json({
            "Message": "Login exception",
            "Exception": error
        });
    });
});

module.exports = router;