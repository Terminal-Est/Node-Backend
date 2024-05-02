import { Request, Response } from "express";
import { DeleteResult } from "typeorm";
import { deleteUserVideoComment } from "../controllers/commentController";
import { getUserUUID } from "../controllers/userController";
import { User } from "../data/entity/user";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response) => {

    var uuid: string;

    if (res.locals.adminUser) {
        uuid = req.body.userId;
    } else {
        uuid = req.body.uuid;
    }

    deleteUserVideoComment(String(req.body.uuid), Number(req.body.commentId))
    .then((handleFullfilled: DeleteResult) => {
        if (handleFullfilled.affected == 0) {
            res.status(400).json({
                Message: "No Comment Found",
                Detail: handleFullfilled
            });
        } else {
            res.status(200).json({
                Message: "Comment Successfully Removed.",
                Detail: handleFullfilled
            });
        }
    }, (hanleRejected) => {
        res.status(400).json({
            Message: "No Comment Found",
            Detail: hanleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Delete Comment Server Error.",
            Detail: err
        });
    })
})

module.exports = router;