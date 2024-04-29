import { NextFunction, Request, Response } from "express";
import { getLikes } from "../controllers/likeController";
import { Like } from "../data/entity/like";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const ID: string = res.locals.videoid;
    var likes: Like[] = [];
    getLikes(ID).then(function (response) {
        likes = response;
        res.status(200).json({
            Message: "Likes Returned.",
            Likes: likes
        });
    });
});

module.exports = router;