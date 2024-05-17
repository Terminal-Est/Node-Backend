import { NextFunction, Request, Response } from "express";
import { getVideosByGroup } from "../controllers/groupController";
import { GroupVideos } from "../data/entity/groupVideos";
import { Video } from "../data/entity/video";
import { User } from "../data/entity/user";
import { getBlobSaS, getVideo } from "../controllers/fileController";
import { getUserUUID } from "../controllers/userController";
import { getCommentsByVideo } from "../controllers/commentController";
import { logToFile } from "../utils/logging";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res : Response, next: NextFunction) => {

    const groupId = Number(res.locals.groupId);
    const uuid = Number(res.locals.uuid);

    const groupVideos: GroupVideos[] = await getVideosByGroup(groupId).then((handleFulFilled) => {
        return handleFulFilled;
    }, () => {
        return [];
    }).catch((err) => {
        logToFile(err);
        return [];
    });

    var videos: any = {};
    var key = "userVideos";
    videos[key] = [];

    if (groupVideos.length > 0) {

        for (var i = 0; i < groupVideos.length; i++) {
        
            const video: Video | null = await getVideo(groupVideos[i].videoId).then((handleFulfilled) => {
                return handleFulfilled;
            }, () => {
                return null;
            }).catch((err) => {
                logToFile(err);
                return null;
            });

            const sasUrl: string = getBlobSaS("u-" + String(uuid), String(video?.videoId));

            const user: User = await getUserUUID(String(video?.uuid)).then((handleFulfilled) => {
                return handleFulfilled;
            });
            
            const comms = await getCommentsByVideo(groupVideos[i].videoId).then((handleFulfilled) => {
                return handleFulfilled;
            }, (handleRejected) => {
                return handleRejected;
            }).catch((err) => {
                logToFile(err);
            });
    
            var data = {
                videoId: video?.videoId,
                videoTitle: video?.title,
                username: user.username,
                videoUrl: sasUrl,
                likes: video?.likes,
                timestamp: video?.timestamp,
                comments: comms
            }
       
            videos[key].push(data);
        }
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