import { NextFunction, Request, Response } from "express";
import { getBlobSaS } from "../controllers/fileController";
import { _transcribe } from "../controllers/transcribeController";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response, next: NextFunction) => {
    var sasURL = getBlobSaS("u-112", "video_1715162479694.mp4")
    var result = await _transcribe(sasURL);
    res.status(200).json({
        Result: result
    })
}) 

module.exports = router;