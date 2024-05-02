import { Request, Response } from "express";
import { DeleteResult } from "typeorm";
import { VideoComment } from "../data/entity/videoComment";
import { updateUserVideoComment, validateComment, isCommentProfane } from "../controllers/commentController";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response) => {
    
    var comment: VideoComment = new VideoComment;
    comment.uuid = Number(req.body.uuid);
    comment.commentId = Number(req.body.commentId);
    comment.comment = String(req.body.comment);
    comment.videoId = String(req.body.videoId);
    comment.timestamp = String(Date.now());

    const valid: any = await validateComment(comment).then((handleFulfilled) => {
        return handleFulfilled;
    }, (handleRejected) => {
        return handleRejected;
    });

    if (typeof valid == 'boolean' && valid == true) {
        if (isCommentProfane(comment.comment)) {
            res.status(400).json({
                Message: "Don't Use Naughty Words."
            });
        } else {
            updateUserVideoComment(String(comment.uuid), 
            comment.commentId, 
            comment.comment,
            comment.timestamp)
            .then((handleFullfilled: DeleteResult) => {
                if (handleFullfilled.affected == 0) {
                    res.status(400).json({
                        Message: "No Comment Found",
                        Detail: handleFullfilled
                    });
                } else {
                    res.status(200).json({
                        Message: "Comment Successfully Updated.",
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
                    Message: "Update Comment Server Error.",
                    Detail: err
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