import { NextFunction, Request, Response } from "express";
import { GroupComment } from "../data/entity/groupComment";
import { addUserGroupComment, validateComment } from "../controllers/commentController";
import { moderate } from "../controllers/contentModeratorController";
import { InsertResult } from "typeorm";
import { UserGroup } from "../data/entity/userGroup";
import { getUserGroupId } from "../controllers/groupController";
import { logToFile } from "../utils/logging";
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

    const userGroup: UserGroup|null = await getUserGroupId(Number(comment.uuid), Number(comment.groupId))
    .then((handleFulfilled) => {
        return handleFulfilled;
    }, () => {
        return null
    }).catch((err) => {
        logToFile(err);
        return null;
    })

    if (!userGroup) {
        res.status(400).json({
            Message: "You do not belong to this group."
        });
    } else if (userGroup.banned) {
        res.status(400).json({
            Message: "You are banned from this group."
        });
    } else {
        const valid: any = await validateComment(comment).then((handleFulfilled) => {
            return handleFulfilled;
        }, (handleRejected) => {
            return handleRejected;
        });

        if (typeof valid == 'boolean' && valid == true) {

            var screen = await moderate(comment.comment);

            if (screen.classification.reviewRecommended) {
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
    }
});


module.exports = router;