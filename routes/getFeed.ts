import { NextFunction, Request, Response } from "express";
import { UserFollows } from "../data/entity/userFollows";
import { User } from "../data/entity/user";
import { Video } from "../data/entity/video";
import { getUserFollows, getUserVideos, getGroupFollows, getUsersByGroup } from "../controllers/feedController";
import { getUserUUID } from "../controllers/userController";
import { getBlobSaS } from "../controllers/fileController";
import { UserGroup } from "../data/entity/userGroup";
var express = require('express');
var router = express.Router();

router.use(async (req: Request, res : Response, next: NextFunction) => { 
   
    const uuid = String(res.locals.uuid);
    var userGroup: UserGroup[] = [];
    var usersByGroup: User[] = [];

    await getUserFollows(uuid).then((handleFulfilled: UserFollows[]) => {

        var userFollows: UserFollows[] = handleFulfilled;
        res.locals.userFollows = userFollows;
    
    }).catch((err) => {
        console.log(err);
    });

    await getGroupFollows(uuid).then((handleFulfilled: UserGroup[]) => {

        userGroup = handleFulfilled;
    }).catch((err) => {
        res.status(500).json({
            Message: "Feed Retreival Error.",
            Detail: err
        })
    });

    for (var i = 0; i < userGroup.length; i++) {

        var ug: UserGroup[] = await getUsersByGroup(String(userGroup[i].groupid));
        
        for (var j = 0; j < ug.length; j++) {
            
            var user: User = await getUserUUID(String(ug[j].userid));    
            usersByGroup.push(user);  
        }
    }

    res.locals.usersByGroup = usersByGroup;
    next();
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

    const uuid = String(res.locals.uuid);
    var key = "userVideos";
    var object: any = {};
    var userVideos: Video[] = [];
    object[key] = [];

    var usersByGroup: User[] = res.locals.usersByGroup;

    await getUserVideos(uuid).then((handleFulfilled) => {
        userVideos = handleFulfilled;
    }).catch((err) => {
        res.status(500).json({
            Message: "Feed Retreival Error.",
            Detail: err
        })
    });

    for (var i = 0; i < userVideos.length; i++) {

        var user = new User();
        
        await getUserUUID(uuid).then((handleFulfilled) => {
            user = handleFulfilled;
        }).catch((err) => {
            res.status(500).json({
                Message: "Feed Retreival Error.",
                Detail: err
            })
        });

        var vidUrl: string = getBlobSaS("u-" + uuid, userVideos[i].videoId);
        var data = {
                videoTitle: userVideos[i].title,
                username: user.username,
                videoUrl: vidUrl,
                likes: userVideos[i].likes,
                timestamp: userVideos[i].timestamp,
        }

        object[key].push(data);
    }

    for (var i = 0; i < usersByGroup.length; i++) {
        
        await getUserVideos(String(usersByGroup[i].uuid)).then((handleFulfilled) => {
            
            var videos: Video[] = handleFulfilled;

            for (var j = 0; j < videos.length; j++) {

                var userContainer = "u-" + String(usersByGroup[i].uuid);

                var vidUrl: string = getBlobSaS(userContainer, videos[j].videoId);
                var data = {
                    videoTitle: videos[j].title,
                    username: usersByGroup[i].username,
                    videoUrl: vidUrl,
                    likes: videos[j].likes,
                    timestamp: videos[j].timestamp,
                }

                object[key].push(data);
            }
        }).catch((err) => {
            res.status(500).json({
                Message: "Feed Retreival Error.",
                Detail: err
            })
        });
    }

    res.status(200).json({
        message: "Feed Data Returned",
        Token: res.locals.jwt,
        object
    })
});

module.exports = router;