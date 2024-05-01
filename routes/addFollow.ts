import { NextFunction, Request, Response } from "express";
import { UserFollows } from "../data/entity/userFollows";
import { validateUserFollows, creatUserFollow } from "../controllers/followController";
import { ValidationError } from "class-validator";
import { InsertResult } from "typeorm";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 

    const uuid: number = Number(req.body.uuid);
    const uuidFollowing: number = Number(req.body.uuidFollowing);

    const userFollows: UserFollows = new UserFollows();
    userFollows.uuid = uuid;
    userFollows.uuidFollowing = uuidFollowing;

    validateUserFollows(userFollows).then((handleFulfilled: boolean) => {
        res.locals.userFollows = userFollows;
        next();
    }, (handleRejected: ValidationError) => {
        res.status(400).json({
            Message: "Invalid Follow Parameters.",
            Detail: handleRejected
        })
    })
});

router.use((req: Request, res : Response, next: NextFunction) => { 

    const userFollows: UserFollows = res.locals.userFollows;

    creatUserFollow(String(userFollows.uuid), String(userFollows.uuidFollowing))
    .then((handleFullfilled: InsertResult) => {
        res.status(200).json({
            Message: "User Followed.",
            Detail: handleFullfilled.identifiers
        });
    }, (handleRejected) => {
        res.status(400).json({
            Message: "User Follow Error.",
            Detail: handleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "User Follow Server Error.",
            Detail: err
        });
    });
});

module.exports = router;