import { NextFunction, Request, Response } from "express";
import { UserFollows } from "../data/entity/userFollows";
import { User } from "../data/entity/user";
import { Video } from "../data/entity/video";
import { getUserFollows, getUserVideos, getGroupFollows, getUsersByGroup } from "../controllers/feedController";
import { getUserUUID } from "../controllers/userController";
import { getBlobSaS } from "../controllers/fileController";
import { UserGroup } from "../data/entity/userGroup";
import { getCommentsByVideo } from "../controllers/commentController";
import { VideoComment } from "../data/entity/videoComment";
import { logToFile } from "../utils/logging";
import { getSponsorSID } from "../controllers/sponsorController";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res : Response, next: NextFunction) => { 
   
    const uuid = String(res.locals.uuid);
    var userGroup: UserGroup[] = [];
    var userFollows: UserFollows[] = [];
    var users: User[] = [];

    var ownUser: User = await getUserUUID(uuid);

    users.push(ownUser);

    await getUserFollows(uuid).then((handleFulfilled: UserFollows[]) => {
        userFollows = handleFulfilled;
        res.locals.userFollows = userFollows;
    }, () => {
        userFollows = [];
    }).catch((err) => {
        logToFile(err);
        userGroup = [];
    });

    await getGroupFollows(uuid).then((handleFulfilled: UserGroup[]) => {
        userGroup = handleFulfilled;
    }, () => {
        userGroup = [];
    }).catch((err) => {
        logToFile(err);
        userGroup = [];
    });

    for (var i = 0; i < userFollows.length; i++) {
        var userByFollow: User|null = await getUserUUID(String(userFollows[i].uuidFollowing))
        .then((handleFulfilled) => {
            return handleFulfilled;
        }, () => {
            return null;
        }).catch((err) => {
            logToFile(err);
            return null;
        });

        if (userByFollow) {
            users.push(userByFollow);  
        }
    }

    for (var i = 0; i < userGroup.length; i++) {

        var ug: UserGroup[] = await getUsersByGroup(String(userGroup[i].groupid)).then((handleFulfilled) => {
            return handleFulfilled;
        }, () => {
            return [];
        }).catch((err) => {
            logToFile(err);
            return [];
        });

        for (var j = 0; j < ug.length; j++) {
            var user: User|null = await getUserUUID(String(ug[j].userid))
            .then((handleFulfilled) => {
                return handleFulfilled;
            }, () => {
                return null;
            }).catch((err) => {
                logToFile(err);
                return null;
            });
            
            if (user) {
                users.push(user);
            }
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

        var user: User|null = await getUserUUID(String(id))
        .then((handleFulfilled) => {
            return handleFulfilled;
        }, () => {
            return null;
        }).catch((err) => {
            logToFile(err);
            return null;
        });

        var videos: Video[] = await getUserVideos(String(user?.uuid)).then((handleFulFilled) => {
            return handleFulFilled;
        }, () => {
            return [];
        }).catch((err) => {
            logToFile(err);
            return [];
        });;

        for (var j = 0; j < videos.length; j++) {

            var userContainer = "u-" + String(user?.uuid);

            const comms: VideoComment[] = await getCommentsByVideo(videos[j].videoId)
            .then((handleFulFilled) => {
                return handleFulFilled;
            }, () => {
                return [];
            }).catch((err) => {
                logToFile(String(err));
                return [];
            });

            if (videos[j].sid  && user != null) {
                var sponsor = await getSponsorSID(videos[j].sid);
                user.username = sponsor.name
            }

            var vidUrl: string = String(getBlobSaS(userContainer, videos[j].videoId));
            var data = {
                videoId: videos[j].videoId,
                videoTitle: videos[j].title,
                username: user?.username,
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