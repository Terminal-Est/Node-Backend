import { NextFunction, Request, Response } from "express";
import { InsertResult } from "typeorm";
import { User } from "../data/entity/user";
import { createUser, validatePassword, validateUser, insertPasswordHash, getHash, createDataUser } from "../controllers/userController";
import { createBlobStorageContainer } from "../controllers/fileController";
import { logToFile } from "../utils/logging";
import { ValidationError } from "class-validator";
import { Uuid } from "../data/entity/uuid";
var express = require('express');
var router = express.Router();

//TODO: Documentation needs to be updated for new route checks.

// Validate user first.
router.use((req: Request, res: Response, next: NextFunction) => {
    
    var user = new User();
    user.email = req.body.email;
    user.username = req.body.username;
    user.dob = req.body.dob;
    user.address = req.body.address;
    user.city = req.body.city;
    user.state = req.body.state;
    user.postcode = req.body.postcode;

    validateUser(user).then((handleFullfilled: boolean) => {
            res.locals.user = user;
            next();
    }, (handleRejected: ValidationError) => {
        res.status(400).json({
            Message: "Invalid User Details",
            Detail: handleRejected
        })
    });
});

// Validate password.
router.use((req: Request, res: Response, next: NextFunction) => {

    validatePassword(req.body.password).then((handleFullfilled: boolean) => {
        next();
    }, (handleRejected: ValidationError) => {
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

// Insert user into PII database.
router.use((req: Request, res: Response, next: NextFunction) => {

    const user: User = res.locals.user;

    console.log(user.dob);

    try {
        createUser(user).then((handleFulfilled: InsertResult) => {
            var userId: Uuid = new Uuid();
            userId.uuid = handleFulfilled.identifiers[0].uuid;
            res.locals.uuid = handleFulfilled.identifiers[0].uuid;

            createDataUser(userId).then((handleFulfilled: InsertResult) => {
                next();
            })

        });
    } catch(error) { 
        res.status(400).json({
            Message: "Database Update Error.",
            Detail: error
        });
    }
});

// Insert hashed password into database. 
router.use((req: Request, res: Response, next: NextFunction) => {

    const uuid = res.locals.uuid;
    const password = res.locals.hashPass;

    insertPasswordHash(uuid, password).then((handleFulfilled : any) => {
        next();
    }).catch((error: any) => {
        res.status(400).json({
            Message: "Hashing Password Error", 
            Stack: error
        });
    });
});

// Add a user container for video storage.
router.use((req: Request, res: Response, next: NextFunction) => {

    const uuid: string = res.locals.uuid;

    try {
        createBlobStorageContainer(uuid).then((responseId) => {
            logToFile("User: " + uuid + " - " + "Container resid: " + responseId);
            res.status(200).json({
                Message: "User Added Successfully.",
                Detail: res.locals.user.email,
                RequestId: responseId
            });
        });
    } catch (e) {
        res.status(400).json({
            Message: "Error Adding Container.",
            detail: e
        })
    }
});

module.exports = router;
