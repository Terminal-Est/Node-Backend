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
    getGroupByID(groupid).then((value) => {
        getUsersByGroup(groupid).then((values) => {
            const bgImgUrl = getBlobSaS("groups", String(value?.Background_FileName));
            res.status(200).json({
                Message: "Group Returned Successfully.",
                GroupDetails: {
                    id: value?.ID,
                    name: value?.Name,
                    description: value?.Description,
                    location: value?.Location,
                    categoryId: value?.CategoryID,
                    backgroundImg: bgImgUrl,
                    users: values,
                    comments: comms
                }
            });
        })
    });
});

module.exports = router;