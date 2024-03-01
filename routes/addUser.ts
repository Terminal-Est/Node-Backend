import { NextFunction, Request, Response } from "express";
import { InsertResult } from "typeorm";
var express = require('express');
var user = require('../controllers/userController')
var router = express.Router();

router.post('/addUser', function(req: Request, res: Response, next: NextFunction) {
    const uid = req.body.userId;
    const admin = req.body.admin;
    const auth = req.body.auth;
    const userName = req.body.username;
    user.createUser(uid, admin, auth, userName).then((handleFulfilled: InsertResult) => {
        res.locals.handleFulfilled = handleFulfilled.identifiers[0].userId;
        next();
    }, () => {
        res.status(400).json({
            "Message": "User Add Promise Rejected.", 
        });
    }).catch((error: any) => { 
        res.status(400).json({
            "Message": "Add User Error", 
            "Stack Trace": error.message
        });
    });
}, function (req: Request, res: Response) {
    const uid = req.body.userId;
    const password = req.body.password;
    user.setPassHash(uid, password).then((handleFulfilled : any) => {
        res.status(200).json({
            "Message": "User Added Successfully.", 
            "User Database Updated": res.locals.handleFulfilled,
            "Hashed Pass Success": handleFulfilled
        });
    }, (handleRejected: any) => {
        res.status(400).json({
            "Message": "Hashing Promise Rejected", 
            "data": handleRejected
        });
    }).catch((error: any) => {
        res.status(400).json({
            "Message": "Hashing Password Error", 
            "Stack Trace": error
        });
    });
});

module.exports = router;
