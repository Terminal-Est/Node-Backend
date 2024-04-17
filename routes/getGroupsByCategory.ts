import { NextFunction, Request, Response } from "express";
import { getGroupsByCategoryID } from "../controllers/groupController";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const categoryid = parseInt(res.locals.id);
    let listofgroups: Array<any> = new Array<any>();
    getGroupsByCategoryID(categoryid).then((values) => {
        values.forEach(function (value) {
            let bgImgUrl = getBlobSaS("groups", String(value?.Background_FileName));

            let x = {
                id: value?.ID,
                name: value?.Name,
                description: value?.Description,
                location: value?.Location,
                categoryId: value?.CategoryID,
                backgroundImg: bgImgUrl
            }

            listofgroups.push(x)
        })
        res.status(200).json({
            Message: "Groups Returned Successfully.",
            listofgroups
        })
    });
});

module.exports = router;