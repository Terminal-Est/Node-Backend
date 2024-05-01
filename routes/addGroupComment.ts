import { NextFunction, Request, Response } from "express";
import { GroupComment } from "../data/entity/groupComment";
import { addUserGroupComment, validateComment, isCommentProfane } from "../controllers/commentController";
import { InsertResult } from "typeorm";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response, next: NextFunction) => {
    var comment: GroupComment = new GroupComment;
    comment.uuid = req.body.uuid;
    comment.groupId = req.body.groupId;
    comment.comment = req.body.comment;

    if (req.body.replyId) {
        comment.replyId = req.body.replyId;
    }

    comment.timestamp = String(Date.now());

    const valid: any = await validateComment(comment).then((handleFulfilled) => {
        return handleFulfilled;
    }, (handleRejected) => {
        return handleRejected;
    });

    if (typeof valid == 'boolean') {
        if (isCommentProfane(comment.comment)) {
            res.status(400).json({
                Message: "Don't Use Naughty Words."
            });
        } else {
            addUserGroupComment(comment).then((handleFulfilled: InsertResult) => {
                res.status(200).json({
                    Message: "Comment Added Successfully.",
                    Comment: comment.comment,
                    Detail: handleFulfilled
                });
            }, (handleRejected: any) => {
                res.status(400).json({
                    Message: "Comment Add Failed.",
                    Detail: handleRejected
                });
            });
        }
    } else {
        res.status(400).json({
            Message: "Invalid Comment.",
            Detail: valid
        });
    }
});


module.exports = router;