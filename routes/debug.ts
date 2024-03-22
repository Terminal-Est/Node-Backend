import { NextFunction, Request, Response } from "express";
import { createBlobOnContainer, createBlobStorageContainer } from "../controllers/fileController";
import { unlink } from 'fs';
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 

    var file = './videos/' + req.file?.filename;
    const fileName: string = String(req.file?.filename);

    createBlobStorageContainer(req.body.uuid);

    createBlobOnContainer(req.body.uuid, file, fileName);

    unlink(file, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send(req.file?.filename);
        }
    })
});

module.exports = router;