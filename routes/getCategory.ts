import { NextFunction, Request, Response } from "express";
import { getCategoryByID } from "../controllers/categoryController";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const categoryid = parseInt(res.locals.id)
    getCategoryByID(categoryid).then((value) => {

        const iconUrl = getBlobSaS("categories", String(value?.Icon_FileName));
        const imgUrl = getBlobSaS("categories", String(value?.Background_FileName));

        res.status(200).json({
            Message: "Category Returned Successfully.",
            CategoryDetails: {
                id: value?.ID,
                name: value?.Name,
                iconImage: iconUrl,
                backgroundImage: imgUrl
            }
        });
    }, (handleRejected) => {
        res.status(400).json({
            Message: "No Category Found.",
            Detail: handleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Get Category Server Error.",
            Detail: err
        });
    });
});

module.exports = router;