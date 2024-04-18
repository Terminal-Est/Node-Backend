import { NextFunction, Request, Response } from "express";
import { getGroups } from "../controllers/groupController";
import { getBlobSaS } from "../controllers/fileController";
import { getCommentsByGroup } from "../controllers/commentController";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response, next: NextFunction) => {
    let listofgroups: Array<any> = new Array<any>();
    await getGroups().then(async(values) => {
        for await (const value of values) {
            let bgImgUrl = getBlobSaS("groups", String(value?.Background_FileName));
            var comms;
            await getCommentsByGroup(value.ID).then((handleFulFilled) => {
                comms = handleFulFilled;
            }, (handleRejected) => {
                comms =handleRejected;
            });
            let x = {
                id: value?.ID,
                name: value?.Name,
                description: value?.Description,
                location: value?.Location,
                categoryId: value?.CategoryID,
                backgroundImg: bgImgUrl,
                comments: comms
            }
            listofgroups.push(x)
        }       
    });
    res.status(200).json({
        Message: "Groups Returned Successfully.",
        listofgroups
    });
});

module.exports = router;