import { NextFunction, Request, Response } from "express";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    const url: string = getBlobSaS(req.body.uuid, req.body.fileName);
    res.status(200).json({
        Message: "File SaS Url Received",
        Url: url
    });
});

module.exports = router;