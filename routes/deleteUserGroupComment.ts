import { Request, Response } from "express";
import { DeleteResult } from "typeorm";
import { deleteUserGroupComment } from "../controllers/commentController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response) => {

    var uuid: string;

    if (res.locals.adminUser) {
        uuid = req.body.userId;
    } else {
        uuid = req.body.uuid;
    }

    deleteUserGroupComment(String(req.body.uuid), Number(req.body.commentId))
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