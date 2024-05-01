import { NextFunction, Request, Response } from "express";
import { deleteVideo, deleteBlobFromContainer } from "../controllers/fileController";
import { DeleteResult } from "typeorm";
var express = require('express');
var router = express.Router();

router.delete('/', (req: Request, res : Response, next: NextFunction) => { 
    
    const uuid: string = req.body.uuid;
    const videoId: string = req.body.filename;

    deleteBlobFromContainer("u-" + uuid, videoId).then(() => {
        deleteVideo(videoId, uuid).then((handleFulfilled: DeleteResult) => {
            res.status(200).json({
                Message: "Video Deleted Successfully.",
                Detail: handleFulfilled.affected
            });
        }, (handleRejected) => {
            res.status(200).json({
                Message: "Video Deleted Successfully.",
                Detail: handleRejected
            });
        }).catch((err) => {
            res.status(500).json({
                Message: "Database Delete Error.",
                Detail: err
            })
        });
    }, () => {
        res.status(400).json({
            Message: "Blob Not Found.",
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Blob Delete Error.",
            Detail: err
        });
    });
 
});

module.exports = router;