import { Request, Response } from "express";
import { DeleteResult } from "typeorm";
import { removeLike } from "../controllers/likeController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response) => {
    const tempLike = { videoid: req.body.videoid, uuid: req.body.uuid };
    removeLike(tempLike).then((handleFullfilled: DeleteResult) => {
        if (handleFullfilled.affected == 0) {
            res.status(400).json({
                Message: "No Like Found",
                Detail: handleFullfilled
            })
        } else {
            res.status(200).json({
                Message: "Like Successfully Removed.",
                Detail: handleFullfilled
            })
        }
    }, (hanleRejected) => {
        res.status(400).json({
            Message: "No Like Found",
            Detail: hanleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Delete Like Server Error.",
            Detail: err
        });
    })
})

module.exports = router;