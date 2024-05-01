import { NextFunction, Request, Response } from "express";
import { getGroupByID, getUsersByGroup } from "../controllers/groupController";
import { getBlobSaS } from "../controllers/fileController";
import { getCommentsByGroup } from "../controllers/commentController";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response, next: NextFunction) => {

    const groupid = parseInt(res.locals.id);
    
    const comms = await getCommentsByGroup(groupid).then((handleFulFilled) => {
        return handleFulFilled;
    }, (handleRejected) => {
        return handleRejected;
    });

    getGroupByID(groupid).then(async(handleFulfilled) => {
        const users: any = await getUsersByGroup(groupid).then((handleFulfilled) => {
            return handleFulfilled;
        }, (handleRejected) => {
            return handleRejected;
        });
        const bgImgUrl = getBlobSaS("groups", String(handleFulfilled?.Background_FileName));
        res.status(200).json({
            Message: "Group Returned Successfully.",
            GroupDetails: {
                id: handleFulfilled?.ID,
                name: handleFulfilled?.Name,
                description: handleFulfilled?.Description,
                location: handleFulfilled?.Location,
                categoryId: handleFulfilled?.CategoryID,
                backgroundImg: bgImgUrl,
                users: users,
                comments: comms
            }
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