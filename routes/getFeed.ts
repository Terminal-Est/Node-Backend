import { NextFunction, Request, Response } from "express";
import { UserFollows } from "../data/entity/userFollows";
import { User } from "../data/entity/user";
import { Video } from "../data/entity/video";
import { getUserFollows, getUserVideos, getGroupFollows, getUsersByGroup } from "../controllers/feedController";
import { getUserUUID } from "../controllers/userController";
import { getBlobSaS } from "../controllers/fileController";
import { UserGroup } from "../data/entity/userGroup";
import { getCommentsByVideo } from "../controllers/commentController";
var express = require('express');
var router = express.Router();

router.use(async (req: Request, res : Response, next: NextFunction) => { 
   
    const uuid = String(res.locals.uuid);
    var userGroup: UserGroup[] = [];
    var userFollows: UserFollows[] = [];
    var users: User[] = [];

    var ownUser: User = await getUserUUID(uuid);
    users.push(ownUser);

    await getUserFollows(uuid).then((handleFulfilled: UserFollows[]) => {
        userFollows = handleFulfilled;
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

    for (var i = 0; i < userFollows.length; i++) {
        var userByFollow = await getUserUUID(String(userFollows[i].uuidFollowing));
        users.push(userByFollow);  
    }

    for (var i = 0; i < userGroup.length; i++) {

        var ug: UserGroup[] = await getUsersByGroup(String(userGroup[i].groupid));

        for (var j = 0; j < ug.length; j++) {
                var user: User = await getUserUUID(String(ug[j].userid));    
                users.push(user);  
        }
    }

    res.locals.users = users;
    next();
});

router.use(async(req: Request, res : Response, next: NextFunction) => {

    const key = "userVideos";
    var object: any = {};
    object[key] = [];
    var users: User[] = res.locals.users;
    const userIds = removeDuplicates(users);

    for await (const id of userIds) {
        var user: User = await getUserUUID(String(id));
        var videos: Video[] = await getUserVideos(String(user.uuid));
        for (var j = 0; j < videos.length; j++) {

            var userContainer = "u-" + String(user.uuid);
            const comms = await getCommentsByVideo(videos[j].videoId).then((handleFulFilled) => {
                return handleFulFilled;
            }, (handleRejected) => {
                return handleRejected;
            });
            var vidUrl: string = getBlobSaS(userContainer, videos[j].videoId);
            var data = {
                videoTitle: videos[j].title,
                username: user.username,
                videoUrl: vidUrl,
                likes: videos[j].likes,
                comments: comms,
                timestamp: videos[j].timestamp,
            }
            object[key].push(data);
        }
    }      

    res.status(200).json({
        message: "Feed Data Returned",
        object
    })
});

function removeDuplicates(array: User[]) {
   const unique = new Set(array.map(item => item.uuid));
   return unique;
}

module.exports = router;