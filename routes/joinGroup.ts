import { NextFunction, Request, Response } from "express";
import { joinGroup } from "../controllers/groupController";
import { InsertResult } from "typeorm";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    let groupid: number = Number(res.locals.groupid);
    let userid: number = Number(req.body.uuid);

    joinGroup(userid, groupid).then((handleFulFilled: InsertResult) => {
        res.status(200).json({
            Message: "Success",
            Details: handleFulFilled
        });
    }, (handleRejected) => {
        res.status(200).json({
            Message: "Error Joining Group",
            Details: handleRejected
        });
    }).catch((error) => {
        res.status(500).json({
            Message: "Server Error",
            Detail: error
        });
    });
});

module.exports = router;