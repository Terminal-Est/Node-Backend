import { NextFunction, Request, Response } from "express";
import { createBlobOnContainer } from "../controllers/fileController";
import { getUserUUID, updateUser, validateUser } from "../controllers/userController";
import { User } from "../data/entity/user";
import { unlink } from "fs";
import { ValidationError } from "class-validator";
import { UpdateResult } from "typeorm/driver/mongodb/typings";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 

    const fileName = String(req.file?.filename);

    getUserUUID(String(req.body.uuid)).then((handleFulfilled) => {

        var user = new User;
        user.uuid = handleFulfilled.uuid;
        user.email = req.body.email;
        user.address = req.body.address;
        user.city = req.body.city;
        user.state = req.body.state;
        user.postcode = req.body.postcode;
        user.avatar = fileName;

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