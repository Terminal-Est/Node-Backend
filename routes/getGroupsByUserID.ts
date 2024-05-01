import { NextFunction, Request, Response } from "express";
import { getGroupsByUserID } from "../controllers/groupController";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const userid = parseInt(res.locals.userid);
    getGroupsByUserID(userid).then((values) => {
        res.status(200).json({
            Message: "Groups Returned Successfully.",
            Detail: values
        });
    }, (handleRejected) => {
        res.status(400).json({
            Message: "No Groups Found.",
            Detail: handleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Groups Retreival Server Error.",
            Detail: err
        });
    });
});

module.exports = router;