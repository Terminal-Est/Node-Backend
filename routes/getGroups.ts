import { NextFunction, Request, Response } from "express";
import { getGroups } from "../controllers/groupController";
import { getBlobSaS } from "../controllers/fileController";
import { getCommentsByGroup } from "../controllers/commentController";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response, next: NextFunction) => {
    
    let listofgroups: Array<any> = new Array<any>();
    
    await getGroups().then(async(handleFulfilled) => {
        
        for await (const value of handleFulfilled) {

            let bgImgUrl = getBlobSaS("groups", String(value?.Background_FileName));
            var comms;

            await getCommentsByGroup(value.ID).then((handleFulFilled) => {
                comms = handleFulFilled;
            }, (handleRejected) => {
                comms = handleRejected;
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

        res.status(200).json({
            Message: "Groups Returned Successfully.",
            listofgroups
        });

    }, (handleRejected) => {    
        res.status(400).json({
            Message: "No Groups Found.",
            Detail: handleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Group Retreival Server Error.",
            Detail: err
        });
    });
});

module.exports = router;