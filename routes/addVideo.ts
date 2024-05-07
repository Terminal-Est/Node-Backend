import { NextFunction, Request, Response } from "express";
import { createBlobOnContainer, validateVideo, createVideo } from "../controllers/fileController";
import { Video } from "../data/entity/video";
import { GroupVideos } from "../data/entity/groupVideos";
import { unlink } from 'fs';
import { ValidationError } from "class-validator";
import { InsertResult } from "typeorm";
import { addVideoToGroup } from "../controllers/groupController";
var express = require('express');
var router = express.Router();

// Validate video data, if video data is ok, got to next function.
router.use((req: Request, res : Response, next: NextFunction) => {

    const timestamp = String(Date.now());
    const fileName: string = String(req.file?.filename);
    var video = new Video()
    video.videoId = fileName;
    video.uuid = req.body.uuid;
    video.title = req.body.title;
    video.description = req.body.description;
    video.timestamp = timestamp;

    if (res.locals.adminUser && req.body.weight) {
        video.weight = Number(req.body.weight);
    } 

    if (res.locals.adminUser && req.body.sid) {
        video.sid = req.body.sid;
    }

    validateVideo(video).then(() => {
        res.locals.vid = video;
        next();
    }, (handleRejected: ValidationError) => {
        res.status(400).json({
            Message: "Invalid User Details",
            Detail: handleRejected
        })
    });
});

// Upload video to Blob Storage, delete local file from api server.
router.use((req: Request, res : Response, next: NextFunction) => { 

    var file = './videos/' + req.file?.filename;
    const fileName: string = String(req.file?.filename);

    createBlobOnContainer("u-" + req.body.uuid, file, fileName).then((requestId: string | undefined) => { 
        unlink(file, (err) => {
            if (err) {
                res.status(500).json({
                    Message: "Video Unlink Error.",
                    Detail: err
                });
            } else {
                res.locals.requestId = requestId;
                next();
            }
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Blob Creation Error.",
            Detail: err
        });
    });
});

// If video upload is successful, update database with video details.
router.use((req: Request, res : Response, next: NextFunction) => { 

    const video: Video = res.locals.vid;

    createVideo(video).then(async(handleFullfilled: InsertResult) => {
        
        var groupInsertResult: any;

        if (req.body.groupId) {

            var groupVideo: GroupVideos = new GroupVideos;
            groupVideo.groupId = Number(req.body.groupId);
            groupVideo.videoId = String(req.file?.filename);

            await addVideoToGroup(groupVideo).then((handleFullfilled) => {
                groupInsertResult = handleFullfilled;
            }, (handleRejected) => {
                groupInsertResult = handleRejected;
            }).catch((err) => {
                groupInsertResult = err;
            });
        }

        res.status(200).json({
            Message: "Video Upload Successful.",
            Detail: handleFullfilled,
            blobReqId: res.locals.requestId,
            filename: req.file?.filename,
            videoToGroup: groupInsertResult,
        });
        
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Video Database Update Failed.",
            Detail: handleRejected
        });
    });
});

module.exports = router;