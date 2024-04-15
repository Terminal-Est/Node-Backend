import { NextFunction, Request, Response } from "express";
import { InsertResult } from "typeorm";
import { addLike, getLike } from "../controllers/likeController"
import { ValidationError } from "class-validator";
var express = require('express');
var router = express.Router();

// Check if an existing like exists.
router.use((req: Request, res: Response, next: NextFunction) => {
    const tempLike = { uuid: req.body.uuid, videoID: req.body.videoid };

    getLike(tempLike).then(function(response) {
        if (response == null) {
            // Proceed to create the like if one does not exist.
            next();
        } else {
            res.json({
                Message: "Failed",
                Detail: response
            })
        }
    });
})

// Add like to the database.
router.use((req: Request, res: Response, next: NextFunction) => {
    const tempLike = { uuid: req.body.uuid, videoID: req.body.videoid };

    addLike(tempLike).then((handleFullfilled: InsertResult) => {
        res.json({
            Message: "Success",
            Detail: handleFullfilled
        })
    }, (handleRejected: ValidationError) => {
        res.status(400).json({
            Message: "Invalid Like Details",
            Detail: handleRejected
        })
    });
})

module.exports = router;