import { Request, Response } from "express";
import { getBlobSaS } from "../controllers/fileController";

var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response) => { 
    
    const container: string = String(res.locals.uuid);
    const filename: string = String(res.locals.filename);
    const url: string = getBlobSaS("u-" + container, filename);

    res.status(200).json({
        Message: "File SaS Url Received.",
        Detail: url
    });
});

module.exports = router;