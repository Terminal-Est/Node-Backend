import { NextFunction, Request, Response } from "express";
import { getUserUUID } from "../controllers/userController";
import { User } from "../data/entity/user";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response) => { 

    getUserUUID(res.locals.uuid).then((handleFulfilled: User) => {
        var avatarUrl = null;
        if (handleFulfilled.avatar != null) {
            avatarUrl = getBlobSaS("u-" + res.locals.uuid, handleFulfilled.avatar);
        }
        res.status(200).json({
            Message: "User Found.",
            Detail: {
                email: handleFulfilled.email,
                username: handleFulfilled.username,
                fname: handleFulfilled.fname,
                lname: handleFulfilled.lname,
                admin: handleFulfilled.admin,
                dob: handleFulfilled.dob,
                address: handleFulfilled.address,
                city: handleFulfilled.city,
                state: handleFulfilled.state,
                postcode: handleFulfilled.postcode,
                avatar: avatarUrl
            }
        })
    }, (handleRejected) => {
        res.status(400).json({
            Message: "User Not Found.",
            Detail: handleRejected
        })
    }).catch((err) => {
        res.status(500).json({
            Message: "User Retreival Server Error.",
            Detail: String(err)
        });
    });
});

module.exports = router;