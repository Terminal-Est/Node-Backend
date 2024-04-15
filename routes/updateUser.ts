import { NextFunction, Request, Response } from "express";
import { createBlobOnContainer } from "../controllers/fileController";
import { getUserUUID, updateUser, validateUser } from "../controllers/userController";
import { User } from "../data/entity/user";
import { unlink } from "fs";
import { ValidationError } from "class-validator";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 

    getUserUUID(String(req.body.uuid)).then((handleFulfilled) => {

        var user = new User;
        user.uuid = handleFulfilled.uuid;
        user.username = handleFulfilled.username;
        var dateOfBirth = new Date(handleFulfilled.dob);
        const year = dateOfBirth.getFullYear().toString();
        const month = dateOfBirth.getMonth().toString();
        const day = dateOfBirth.getDay().toString();
        
        const dobString: string = `${year}-${month}-${day}`;

        console.log(dobString);

        user.dob = dobString;

        if (req.body.email) {
            user.email = req.body.email;
        } else {
            user.email = handleFulfilled.email;
        }

        if (req.body.address) {
            user.address = req.body.address;
        } else {
            user.address = handleFulfilled.address;
        }

        if (req.body.city) {
            user.city = req.body.city;
        } else {
            user.city = handleFulfilled.city;
        }

        if (req.body.state) {
            user.state = req.body.state;
        } else {
            user.state = handleFulfilled.state;
        }

        if (req.body.postcode) {
            user.postcode = req.body.postcode;
        } else {
            user.postcode = handleFulfilled.postcode;
        }

        if (req.file?.filename) {
            user.avatar = req.file.filename;
        } else {
            user.avatar = handleFulfilled.avatar;
        }
        
        validateUser(user).then((handleFulfilled) => {
            res.locals.user = user;
            next();
        }, (handleRejected: ValidationError) => {
            res.status(400).json({
                Message: "Invalid User Details.",
                Detail: handleRejected
            });
        })
    }).catch((error) => {
        res.status(500).json({
            Message: "Update User Error.",
            Detail: error
        });
    })
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

    if (user.avatar) {

        var file = './images/' + req.file?.filename;
        const fileName: string = String(req.file?.filename);

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
            Message: "User Added Successfully.",
            Detail: res.locals.user.email,
            containerReq: res.locals.contaierCreateReq,
        });
    }
});

module.exports = router;