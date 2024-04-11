import { NextFunction, Request, Response } from "express";
import { getVideosByGroup } from "../controllers/groupController";
import { GroupVideos } from "../data/entity/groupVideos";
import { Video } from "../data/entity/video";
import { User } from "../data/entity/user";
import { getBlobSaS, getVideo } from "../controllers/fileController";
import { getUserUUID } from "../controllers/userController";
var express = require('express');
var router = express.Router();

router.use(async (req: Request, res : Response, next: NextFunction) => {

    const videoId = Number(res.locals.groupId);

    const groupVideos: GroupVideos[] = await getVideosByGroup(videoId).then((handleFulFilled) => {
        return handleFulFilled;
    });

    var videos: any = {};
    var key = "userVideos";
    videos[key] = [];

    for (var i = 0; i < groupVideos.length; i++) {
        
        const video: Video | null = await getVideo(groupVideos[i].videoId).then((handleFulfilled) => {
            return handleFulfilled;
        });
        const sasUrl: string = getBlobSaS("u-" + String(), String(video?.videoId));
        const user: User = await getUserUUID(String(video?.uuid)).then((handleFulfilled) => {
            return handleFulfilled;
        });

        var data = {
            videoTitle: video?.title,
            username: user.username,
            videoUrl: sasUrl,
            likes: video?.likes,
            timestamp: video?.timestamp,
        }

        console.log(data);

        videos[key].push(data);
    }

    if (videos.length > 0) {
        res.status(200).json({
            Message: "Group Video Feed Returned.",
            videos
        });
    } else {
        res.status(400).json({
            Message: "No Videos Found"
        });
    }
});

module.exports = router;