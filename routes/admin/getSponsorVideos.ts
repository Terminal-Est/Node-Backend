import { Request, Response } from "express";
import { getSponsorVideos } from "../../controllers/sponsorController";
import { Video } from "../../data/entity/video";
import { logToFile } from "../../utils/logging";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response) => {

    var videos: Video[]|null = await getSponsorVideos(Number(res.locals.sid))
        .then((handleFulfilled: Video[]) => {
            return handleFulfilled;
        }, () => {
            return null;
        }).catch((err) => {
            logToFile(err);
            return null;
        });

    if (videos) {
        res.status(200).json({
            Message: "Sponsor Videos Found.",
            Detail: videos
        });
    } else {
        res.status(400).json({
            Message: "No Sponsor Videos Found."
        });
    }
});

module.exports = router;