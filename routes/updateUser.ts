import { NextFunction, Request, Response } from "express";
import { createBlobOnContainer } from "../controllers/fileController";
import { getUserUUID, updateUser, validateUser } from "../controllers/userController";
import { User } from "../data/entity/user";
import { unlink } from "fs";
import { ValidationError } from "class-validator";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res : Response, next: NextFunction) => { 

    if (res.locals.adminUser) {
        res.locals.uuid = req.body.userId;
    } else {
        res.locals.uuid = req.body.uuid;
    }
    
    var user: User|null = await getUserUUID(String(req.body.uuid))
    .then((handleFulfilled) => {
        return handleFulfilled;
    }, () => {
        return null;
    }).catch((err) => {
        console.log(err);
        return null;
    });
    
    if (user) {

        var dateOfBirth = new Date(user.dob);
        var dateArray: string[] = dateOfBirth.toISOString().split('T');

        const dobString: string = dateArray[0];

        user.dob = dobString;

        if (req.body.email) {
            user.email = req.body.email;
        } 

        if (req.body.address) {
            user.address = req.body.address;
        } 

        if (req.body.city) {
            user.city = req.body.city;
        } 

        if (req.body.state) {
            user.state = req.body.state;
        } 

        if (req.body.postcode) {
            user.postcode = req.body.postcode;
        } 

        if (req.file?.filename) {
            user.avatar = req.file.filename;
        }

        if (req.body.fname) {
            user.fname = req.body.fname;
        }

        if (req.body.lname) {
            user.lname = req.body.lname;
        } 
        
        const valid: any = await validateUser(user).then((handleFulFilled) => {
            return handleFulFilled;
        }, (handleRejected: ValidationError) => {
            return handleRejected;
        });

        if (valid === true) {
            res.locals.user = user;
            next();
        } else {
            res.status(400).json({
                Message: "Invalid User Details.",
                Detail: valid
            });
        }
    } else {
        res.status(400).json({
            Message: "User Not Found Error."
        });
    }
});

router.use((req: Request, res : Response, next: NextFunction) => {
    
    const user: User = res.locals.user;

    updateUser(user).then((handleFulfilled) => {
        res.locals.updateResult = handleFulfilled;
        next();
    }).catch((error) => {
        res.status(500).json({
            Message: "User Update Error.",
            Detail: error
        })
    });
        
});

router.use((req: Request, res : Response, next: NextFunction) => {

    const user: User = res.locals.user;

    if (req.file) {

        var file = './images/' + req.file.filename;
        const fileName: string = String(req.file.filename);

        try {
            createBlobOnContainer("u-" + res.locals.uuid, file, fileName)
            .then((requestId: string | undefined) => { 
                unlink(file, (err) => {
                    if (err) {
                        res.status(400).json({
                            Message: "Image Upload Error.",
                            Detail: err
                        });
                    } else {
                        res.status(200).json({
                            Message: "User Updated Successfully.",
                            Detail: user.email,
                            imageReq: requestId,
                            updateRes: res.locals.updateResult
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
            Message: "User Updated Successfully.",
            Detail: res.locals.user.email,
            updateRes: res.locals.updateResult
        });
    }
});

module.exports = router;