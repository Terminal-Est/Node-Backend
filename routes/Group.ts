import { NextFunction, Request, Response } from "express";
import { getGroupByID, getGroups, addGroup, joinGroup, getGroupByCategoryID } from "../controllers/groupController";
import { createBlobOnContainer } from "../controllers/fileController";
import { InsertResult } from "typeorm";
import { Group } from "../data/entity/group";
import { unlink } from 'fs';
var path = require('path');
var multer = require('multer');
var express = require('express');
var router = express.Router();

const imageStorage = multer.diskStorage({
    fileFilter: function(req: any, file: any, cb: any) {
        imageMimeTypeCheck(req, file, cb);
    },
    limits: {
        // Limit file size to 5 meg.
        fileSize: 5000000
    },
    destination: function(req: any, file: any, cb: any) {
        cb(null, './images');
    },
    filename: function (req: any, file: any, cb: any) {
        const tstamp: string = Date.now().toString();
        cb(null, file.fieldname + "_" + tstamp + path.extname(file.originalname));
    }
})

// check image mime types
function imageMimeTypeCheck(req: any, file: any, cb: any) {

    const mimetype: string = file.mimetype;

    if (file.mimetype.toLowerCase() == "image/png" || 
        file.mimetype.toLowerCase() == "image/jpg" || 
        file.mimetype.toLowerCase == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
        }
}

// Middleware for adding array of images to request of a size of 2.
const imageUploads = multer({ storage: imageStorage });

router.get('/', (req: Request, res : Response, next: NextFunction) => {
    getGroups().then((value) => {
        res.json(value);
    });
});

router.post('/', imageUploads.single('background'), (req: Request, res : Response, next: NextFunction) => {
    const ts = String(Date.now());
    const tempGroup = new Group();
    tempGroup.Name = req.body.Name;
    tempGroup.Description = req.body.Description;
    tempGroup.System = parseInt("1");
    tempGroup.CategoryID = req.body.categoryid;
    tempGroup.Location = req.body.Location;
    if (req.file != null) {
        //const origFileName: string = req.file?.originalname;
        tempGroup.Background_FileName = req.file.originalname;
        tempGroup.Image_TimeStamp = ts;
    }

    res.locals.group = tempGroup;

    next();
});

router.use((req: Request, res : Response, next: NextFunction) => { 

    var file = './images/' + req.file?.filename;
    const fileName: string = String(req.file?.originalname);

    try {
        createBlobOnContainer("u-" + req.body.uuid, file, fileName).then((requestId: string | undefined) => { 
            unlink(file, (err) => {
                if (err) {
                    res.status(400).json({
                        Message: "File Upload Error.",
                        Detail: err
                    });
                } else {
                    res.locals.requestId = requestId;
                    next();
                }
            });
        });
    } catch (e) {
        res.status(400).json({
            Message: "Upload Failed.",
            Detail: e
        });
    }
});

router.use((req: Request, res : Response, next: NextFunction) => { 

    const requestId = res.locals.requestId;
    const tempGroup: Group = res.locals.group

    addGroup(tempGroup).then((handleFullfilled: InsertResult) => {
        res.status(200).json({
            Message: "Video Upload Successful.",
            Detail: handleFullfilled,
            blobReqId: res.locals.requestId,
            filename: req.file?.filename
        });
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Video Database Update Failed.",
            Detail: handleRejected
        });
    });
});

router.get('/:id', (req: Request, res : Response, next: NextFunction) => {
    const groupid = parseInt(req.params.id);
    getGroupByID(groupid).then((value) => {
        res.json(value);
    })
});

router.get('/:categoryid', (req: Request, res : Response, next: NextFunction) => {
    const categoryid: number = parseInt(req.params.categoryid);

    getGroupByCategoryID(categoryid);

    res.sendStatus(200);
});

router.post('/:id/join', (req: Request, res : Response, next: NextFunction) => {
    const groupid: number = parseInt(req.params.id);
    const userid: number = parseInt(req.body.uuid);

    joinGroup(userid, groupid);

    res.sendStatus(200);
});

module.exports = router;