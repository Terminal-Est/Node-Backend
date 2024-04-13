import { NextFunction, Request, Response } from "express";
import { DeleteResult } from "typeorm";
import { removeLike } from "../controllers/likeController";
import { ValidationError } from "class-validator";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const tempLike = { videoid: req.body.videoid, uuid: req.body.uuid };
    removeLike(tempLike).then((handleFullfilled: DeleteResult) => {
        if (handleFullfilled.affected == 0) {
            res.status(404).json({
                "Message": "No Like Found",
                "Detail": handleFullfilled
            })
        } else {
            res.json({
                "Message": "Success",
                "Detail": handleFullfilled
            })
        }
    })
})

module.exports = router;