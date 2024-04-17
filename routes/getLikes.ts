import { NextFunction, Request, Response } from "express";
import { getLikes } from "../controllers/likeController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const ID: string = res.locals.videoid;
    getLikes(ID).then(function (response) {
        if (response.length == 0) {
            res.status(404).json({
                Message: "No likes found."
            })
        } else {
            res.json(response);
        }
    });
});

module.exports = router;