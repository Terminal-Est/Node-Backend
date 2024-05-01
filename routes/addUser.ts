import { NextFunction, Request, Response } from "express";
import { InsertResult } from "typeorm";
import { User } from "../data/entity/user";
import { createUser, validatePassword, validateUser, insertPasswordHash, getHash, createDataUser } from "../controllers/userController";
import { createBlobStorageContainer, createBlobOnContainer } from "../controllers/fileController";
import { ValidationError } from "class-validator";
import { Uuid } from "../data/entity/uuid";
import { unlink } from "fs";
import { emailMiddleware } from "./getNewEmailAuth";
var express = require('express');
var router = express.Router();

//TODO: Documentation needs to be updated for new route checks.

// Validate user first.
router.use((req: Request, res: Response, next: NextFunction) => {
    
    const fileName: string = String(req.file?.filename);

    var user = new User();
    user.email = req.body.email;
    user.username = req.body.username;
    user.dob = req.body.dob;
    user.address = req.body.address;
    user.city = req.body.city;
    user.state = req.body.state;
    user.postcode = req.body.postcode;
    user.avatar = fileName;
    user.fname = req.body.fname;
    user.lname = req.body.lname;

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

    validatePassword(req.body.password).then(() => {
        next();
    }, (handleRejected: ValidationError) => {
        res.status(400).json({
            Message: "Invalid User Details",
            Detail: handleRejected
        });
    });
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
    }).catch((err) => {
        res.status(500).json({
            Message: "Password Hash Server Error.",
            Detail: err
        });
    });
})

// Insert user into PII database.
router.use((req: Request, res: Response, next: NextFunction) => {

    const user: User = res.locals.user;

    createUser(user).then((handleFulfilled: InsertResult) => {
        var userId: Uuid = new Uuid();
        userId.uuid = handleFulfilled.identifiers[0].uuid;
        res.locals.uuid = handleFulfilled.identifiers[0].uuid;

        createDataUser(userId).then(() => {
            next();
        }, (handleRejected) => {
            res.status(500).json({
                Message: "User Data UUID Create Error.",
                Detail: handleRejected
            });
        }).catch((err) => {
            res.status(500).json({
                Message: "User UUID on Data Server Error.",
                Detail: err
            });
        });

    }).catch((err) => {
        res.status(500).json({
            Message: "User Creation Server Error.",
            Detail: err
        });
    });
});

// Insert hashed password into database. 
router.use((req: Request, res: Response, next: NextFunction) => {

    const uuid = res.locals.uuid;
    const password = res.locals.hashPass;

    insertPasswordHash(uuid, password).then(() => {
        next();
    }).catch((error: any) => {
        res.status(500).json({
            Message: "Hashing Password Error", 
            Stack: error
        });
    });
});

// Add a user container for video storage.
router.use((req: Request, res: Response, next: NextFunction) => {

    const uuid: string = res.locals.uuid;

    createBlobStorageContainer("u-" + uuid).then((responseId) => {
        res.locals.contaierCreateReq = responseId
        next();
    }).catch((err) => {
        res.status(500).json({
            Message: "Server Error Adding Container.",
            detail: err
        });
    });
});

// Send authentication e-mail.
router.use(emailMiddleware);

// Insert User Avatar into blob contaier if it exists. 
router.use((req: Request, res: Response, next: NextFunction) => {
    
    if (req.file?.filename) {
        
        var file = './images/' + req.file?.filename;
        const fileName: string = String(req.file?.filename);

        createBlobOnContainer("u-" + res.locals.uuid, file, fileName).then((requestId: string | undefined) => { 
            unlink(file, (err) => {
                if (err) {
                    res.status(500).json({
                        Message: "Image Unlink Error.",
                        Detail: err
                    });
                } else {
                    res.status(200).json({
                        Message: "User Added Successfully.",
                        Detail: res.locals.user.email,
                        containerReq: res.locals.contaierCreateReq,
                        imageReq: requestId
                    });
                }
            });
        }).catch((err) => {
            res.status(500).json({
                Message: "Blob Creation Error",
                Detail: err
            });
        });
    } else {
        res.status(200).json({
            Message: "User Added Successfully.",
            Detail: res.locals.user.email,
            containerReq: res.locals.contaierCreateReq,
        });
    }
});

module.exports = router;
