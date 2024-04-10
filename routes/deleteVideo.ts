import { NextFunction, Request, Response } from "express";
import { deleteVideo, deleteBlobFromContainer } from "../controllers/fileController";
import { DeleteResult } from "typeorm";
var express = require('express');
var router = express.Router();

router.delete('/', (req: Request, res : Response, next: NextFunction) => { 
    
    const uuid: string = req.body.uuid;
    const videoId: string = req.body.filename;

    try {
        deleteBlobFromContainer("u-" + uuid, videoId);
        deleteVideo(videoId, uuid).then((handleFulfilled: DeleteResult) => {
            res.status(200).json({
                Message: "Video Deleted Successfully.",
                Detail: handleFulfilled.affected
            })
        })
    } catch (err) {
        res.status(400).json({
            Message: "Delete Blob Failed.",
            Detail: err
        });
    }
});

module.exports = router;