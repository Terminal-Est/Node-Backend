import { NextFunction, Request, Response } from "express";
import { getBlobSaS } from "../controllers/fileController";

var express = require('express');
var router = express.Router();

router.get('/:id/:fileName', (req: Request, res : Response, next: NextFunction) => { 

    console.log(req.params);

    const url: string = getBlobSaS(req.params.id, req.params.fileName);
    res.status(200).json({
        Message: "File SaS Url Received",
        Url: url
    });
});

module.exports = router;