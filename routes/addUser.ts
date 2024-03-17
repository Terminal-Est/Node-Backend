import { NextFunction, Request, Response } from "express";
import { InsertResult } from "typeorm";
import { User } from "../data/entity/user";
import { createUser, validatePassword, validateUser, insertPasswordHash, getHash } from "../controllers/userController";
var express = require('express');
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

// Validate user first.
router.use((req: Request, res: Response, next: NextFunction) => {

    var user = new User();
    user.userId = req.body.userId;
    user.admin = req.body.admin;
    user.auth = req.body.auth;
    user.username = req.body.username;
    user.address = req.body.address;
    user.city = req.body.city;
    user.state = req.body.state;
    user.postcode = req.body.postcode;

    res.locals.user = user;

    validateUser(user).then((handleFullfilled: any) => {
            next();
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Invalid User Details",
            Detail: handleRejected
        })
    });
});

// Validate password.
router.use((req: Request, res: Response, next: NextFunction) => {

    validatePassword(req.body.password).then((handleFullfilled: any) => {
        next();
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Invalid User Details",
            Detail: handleRejected
        })
    })
});

// If password is valid, create password hash.
router.use((req: Request, res: Response, next: NextFunction) => {

    getHash(req.body.password).then((handleRejected: any) => {
        res.status(400).json({
            Message: "Hashing Error",
            Stack: handleRejected})
    }, (handleFulfilled: string) => {
        res.locals.hashPass = handleFulfilled;
        next()
    });
})

// Insert user into database.
router.use((req: Request, res: Response, next: NextFunction) => {

    const user: User = res.locals.user;

    createUser(user)
        .then((handleFulfilled: InsertResult) => {
        res.locals.userId = handleFulfilled.identifiers[0].userId;
        next();
    }).catch((error: any) => { 
        res.status(400).json(
            error.message
        );
    });
});

// Insert jashed password into database. If successful respond 200 
// with the user ID.
router.use((req: Request, res: Response, next: NextFunction) => {
    const uid = res.locals.userId;
    const password = res.locals.hashPass;
    insertPasswordHash(uid, password).then((handleFulfilled : any) => {
        next();
    }).catch((error: any) => {
        res.status(400).json({
            Message: "Hashing Password Error", 
            Stack: error
        });
    });
    res.status(200).json({
        Message: "User Added Successfully.",
        Detail: res.locals.user.userId
    });
});

module.exports = router;
