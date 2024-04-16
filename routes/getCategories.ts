import { NextFunction, Request, Response } from "express";
import { getCategories } from "../controllers/categoryController";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();


router.use((req: Request, res: Response, next: NextFunction) => {
    let listofgroups: Array<any> = new Array<any>();
    getCategories().then((values) => {
        values.forEach(function (value) {

            let iconUrl = getBlobSaS("categories", String(value?.Icon_FileName));
            let bgImgUrl = getBlobSaS("categories", String(value?.Background_FileName));

            let x = {
                ID: value.ID,
                Name: value.Name,
                iconImg: iconUrl,
                bgImg: bgImgUrl
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