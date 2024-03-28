import { NextFunction, Request, Response } from "express";
import { getVideos } from "../controllers/fileController";
import { Video } from "../data/entity/video";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    const uuid: string = req.params.uuid;
    var videos: Video[];
    var fileNames: string[];

    getVideos(uuid).then((handleFulfilled: Video[]) => {
        videos = handleFulfilled;
        console.log(videos[0].videoId);
        videos.forEach((video) => {
            fileNames.push(video.videoId);
        });

        res.status(200).json({
            Message: "Video Files",
            Uuid: uuid,
            Videos: fileNames
        })
    })
});

module.exports = router;