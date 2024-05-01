import { NextFunction, Request, Response } from "express";
import { getGroupsByCategoryID } from "../controllers/groupController";
import { getCommentsByGroup } from "../controllers/commentController";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response, next: NextFunction) => {

    const categoryid = parseInt(res.locals.id);
    let listofgroups: Array<any> = new Array<any>();

    await getGroupsByCategoryID(categoryid).then(async(values) => {
        for await (const value of values) {
            const comms = await getCommentsByGroup(value.ID).then((handleFulFilled) => {
                return handleFulFilled;
            }, (handleRejected) => {
                return handleRejected;
            });
            let bgImgUrl = getBlobSaS("groups", String(value?.Background_FileName));

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
        })
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