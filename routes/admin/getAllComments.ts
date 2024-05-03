import { Request, Response } from "express";
import { getAllGroupComments, getAllVideoComments } from "../../controllers/commentController";
import { GroupComment } from "../../data/entity/groupComment";
import { VideoComment } from "../../data/entity/videoComment";
import { logToFile } from "../../utils/logging";

var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response) => {
   
    const groupComments: GroupComment[] = await getAllGroupComments()
        .then((handleFulfilled) => {
            return handleFulfilled;
        }, () => {
            return [];
        }).catch((err) => {
            logToFile(err);
            return [];
        });

    const videoComments: VideoComment[] = await getAllVideoComments()
        .then((handleFulfilled) => {
            return handleFulfilled;
        }, () => {
            return [];
        }).catch((err) => {
            logToFile(err);
            return [];
        });

    res.status(200).json({
        Message: "Comments Returned.",
        VideoComments: videoComments,
        GroupComments: groupComments
    })
    
});
module.exports = router;