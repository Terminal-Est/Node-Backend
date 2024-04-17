import { NextFunction, Request, Response } from "express";
import { getGroupByID, getUsersByGroup } from "../controllers/groupController";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const groupid = parseInt(res.locals.id);
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
                    users: values
                }
            });
        })
    });
});

module.exports = router;