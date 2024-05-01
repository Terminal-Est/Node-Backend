import { Request, Response } from "express";
import { getLikes } from "../controllers/likeController";
import { Like } from "../data/entity/like";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response) => {

    const ID: string = res.locals.videoid;
    var likes: Like[] = [];

    getLikes(ID).then((response) => {
        likes = response;
        res.status(200).json({
            Message: "Likes Returned.",
            Likes: likes
        });
    }, (handleRejected) => {
        res.status(400).json({
            Message: "No Likes Found.",
            Detail: handleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Like Retreival Server Error.",
            Detail: err
        });
    });
});

module.exports = router;