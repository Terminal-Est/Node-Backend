import { NextFunction, Request, Response } from "express";
import { UserFollows } from "../data/entity/userFollows";
import { User } from "../data/entity/user";
import { Video } from "../data/entity/video";
import { getUserFollows, getUserVideos } from "../controllers/feedController";
import { getUserUUID } from "../controllers/userController";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    
    const uuid = req.body.uuid;

    getUserFollows(uuid).then((handleFulfilled: UserFollows[]) => {

        var userFollows: UserFollows[] = handleFulfilled;
        res.locals.userFollows = userFollows;
        next();

    }, (handleRjected: string) => {

        res.status(200).json({
            message: handleRjected
        })
    })
});

router.use(async (req: Request, res : Response, next: NextFunction) => {

    var userFollows: UserFollows[] = res.locals.userFollows;
    var users: User[] = [];

    for (var i = 0; i < userFollows.length; i++) {
        var user: User = await getUserUUID(String(userFollows[i].uuidFollowing));
        users.push(user);
    }

    res.locals.userFollows = users;
    next();
});

router.use(async (req: Request, res : Response, next: NextFunction) => {

    var key = "userVideos";
    var object: any = {};
    object[key] = [];

    var users: User[] = res.locals.userFollows;

    for (var i = 0; i < users.length; i++) {
        
        await getUserVideos(String(users[i].uuid)).then((handleFulfilled) => {
            
            var videos: Video[] = handleFulfilled;

            for (var j = 0; j < videos.length; j++) {

                var vidUrl: string = getBlobSaS(String(users[i].uuid), videos[j].videoId);
                var data = {
                    videoTitle: videos[j].title,
                    username: users[i].username,
                    videoUrl: vidUrl,
                    likes: videos[j].likes,
                    timestamp: videos[j].timestamp,
                }

                object[key].push(data);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    res.status(200).json({
        message: "Feed Data Returned",
        object
    })
});

module.exports = router;