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
        res.locals.userId = handleFulfilled.identifiers[0].userId;
        next();
    }).catch((error: any) => { 
        res.status(400).json({
            Message: "Add User Error", 
            Stack: error.message
        });
    });
}, function (req: Request, res: Response, next: NextFunction) {
    user.getHash(req.body.password).then((handleBad: string) => {
        res.status(400).json({
            Message: "Hashing Error",
            Stack: handleBad})
    }, (handleOk: string) => {
        res.locals.hashPass = handleOk;
        next()
    });
}, function (req: Request, res: Response) {
    const uid = res.locals.userId;
    const password = res.locals.hashPass;
    user.insertPasswordHash(uid, password).then((handleFulfilled : any) => {
        res.status(200).json({
            Message: "User Added Successfully.",
            detail: handleFulfilled
        });
    }).catch((error: any) => {
        res.status(400).json({
            Message: "Hashing Password Error", 
            Stack: error
        });
    });
});

module.exports = router;
