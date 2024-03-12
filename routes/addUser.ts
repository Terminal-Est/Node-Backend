import { NextFunction, Request, Response } from "express";
import { InsertResult } from "typeorm";
var express = require('express');
var user = require('../controllers/userController')
var router = express.Router();

/**
 * Request parameters to supplied in BODY.
 * 
 * uid - STRING - format: e-mail, description: unique userid this will be
 * an e-mail address and formatted as such. Cannot be null.
 * 
 * admin - BOOL - format: tinyint (can be 0 or 1, true or false), description:
 * specifies whether the account has admin priviledges. default 0.
 * 
 * auth - BOOL - format: tinyint (can be 0 or 1, true or false), description:
 * specifies whether the account is authenticated. default 0.
 * 
 * username - STRING - format: TBA, description: user screen name. Cannot be null.
 * 
 * address - STRING - format: TBA, description: user address. Cannot be null.
 * 
 * city - STRING - format: TBA, description: user city. Cannot be null.
 * 
 * state - STRING - format: TBA, description: user state. Cannot be null.
 * 
 * postcode - STRING - format: TBA, description: user postcode. Cannot be null.
 * 
 * password - STRING - format: TBA, description: user password. Cannot be null.
 * 
 * Sequenceing
 *
 * 1) Calls createUser function from user controller which attempts
 * to add user to the databse, will respond 400 with JSON formatted
 * with an error message and exception stack details.
 * 
 * 2) If user is created successfully, the next function is called
 * which hashes the supplied password for storage. If there is an 
 * exception thrown during this process it is sent as a response. Next 
 * function is called with the hashed password stored in the response locals.
 * 
 * 3) Hashed password is retreived from repsonse locals and the insertPasswordHash
 * function is called from userController. Upon successful insertion of the hashed password
 * a 200 response is sent with the details of the transaction. This can be used to
 * redirect to the login page at the front end. No JWT is sent on success, the user must
 * login to get a valid JWT.
 */

router.post('/addUser', function(req: Request, res: Response, next: NextFunction) {

    const uid = req.body.userId;
    const admin = req.body.admin;
    const auth = req.body.auth;
    const userName = req.body.username;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const postcode = req.body.postcode;

    user.createUser(uid, 
        admin, 
        auth, 
        userName, 
        address, 
        city, 
        state, 
        postcode).then((handleFulfilled: InsertResult) => {
        res.locals.userId = handleFulfilled.identifiers[0].userId;
        next();
    }).catch((error: any) => { 
        res.status(400).json({
            Message: "Add User Error", 
            Stack: error.message
        });
    });

}, function (req: Request, res: Response, next: NextFunction) {
    user.getHash(req.body.password).then((handleRejected: string) => {
        res.status(400).json({
            Message: "Hashing Error",
            Stack: handleRejected})
    }, (handleFulfilled: string) => {
        res.locals.hashPass = handleFulfilled;
        next()
    });

}, function (res: Response) {
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
