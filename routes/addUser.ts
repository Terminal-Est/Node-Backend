import { NextFunction, Request, Response } from "express";
import { InsertResult } from "typeorm";
import { User } from "../data/entity/user";
import { createUser, validatePassword, validateUser, insertPasswordHash, getHash, createDataUser } from "../controllers/userController";
import { sendAuthenticationEmail } from "../controllers/emailController";
import { createBlobStorageContainer, createBlobOnContainer } from "../controllers/fileController";
import { ValidationError } from "class-validator";
import { Uuid } from "../data/entity/uuid";
import { unlink } from "fs";
import { getAuthJWT } from "../controllers/securityController";
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

    createUser(user).then((handleFulfilled: InsertResult) => {
        var userId: Uuid = new Uuid();
        userId.uuid = handleFulfilled.identifiers[0].uuid;
        res.locals.uuid = handleFulfilled.identifiers[0].uuid;

        createDataUser(userId).then((handleFulfilled: InsertResult) => {
            next();
        })
    }).catch((error) => {
        res.status(400).json({
            Message: "Database Update Error.",
            Detail: error
        });
    });
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
        createBlobStorageContainer("u-" + uuid).then((responseId) => {
            res.locals.contaierCreateReq = responseId
            next();
        });
    } catch (e) {
        res.status(400).json({
            Message: "Error Adding Container.",
            detail: e
        });
    }
});

// Send authentication e-mail.
router.use(async(req: Request, res: Response, next: NextFunction) => {

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

    const jwt: any = await getAuthJWT(res.locals.uuid, keySet.private, kid, '1d').then((handleFulfilled) => {
        return handleFulfilled;
    }, (handleRejected) => {
        return handleRejected;
    });

    const regUser: User = res.locals.user;
    const subject: string = "Greentik Authentication Email";
    const htmlcontent: string = `<h1>Greentik Authentication Email</h1><br>` +
                                `<p>Please click the following link to authenticate your e-mail address...</p><br>` + 
                                `<a href="https://greentikapidev.azurewebsites.net/register/${jwt}">Click here to validate!</a>`;
    sendAuthenticationEmail(regUser.email, regUser.username, subject, htmlcontent);
    next();
});

// Insert User Avatar into blob contaier if it exists. 
router.use((req: Request, res: Response, next: NextFunction) => {
    
    if (req.file?.filename) {
        
        var file = './images/' + req.file?.filename;
        const fileName: string = String(req.file?.filename);

        try {
            createBlobOnContainer("u-" + res.locals.uuid, file, fileName).then((requestId: string | undefined) => { 
                unlink(file, (err) => {
                    if (err) {
                        res.status(400).json({
                            Message: "Image Upload Error.",
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
            });
        } catch (e) {
            res.status(500).json({
                Message: "Upload Failed.",
                Detail: e
            });
        }
    } else {
        res.status(200).json({
            Message: "User Added Successfully.",
            Detail: res.locals.user.email,
            containerReq: res.locals.contaierCreateReq,
        });
    }
});

module.exports = router;
