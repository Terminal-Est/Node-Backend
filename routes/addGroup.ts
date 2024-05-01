import { NextFunction, Request, Response } from "express";
import { addGroup } from "../controllers/groupController";
import { createBlobOnContainer } from "../controllers/fileController";
import { InsertResult } from "typeorm";
import { Group } from "../data/entity/group";
import { unlink } from 'fs';
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
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

// Insert the database record first to get the GroupID to name the image.
router.use((req: Request, res: Response, next: NextFunction) => {

    const group: Group = res.locals.group;

    addGroup(group).then((handleFullfilled: InsertResult) => {
        if (req.file) {
            res.locals.groupid = handleFullfilled.identifiers[0].ID;
            next();
        } else {
            res.status(201).json({
                Message: "Group Added Successfully.",
                Detail: handleFullfilled.identifiers[0].ID
            });
        }
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Group Database Update Failed.",
            Detail: handleRejected
        });
    });
});

// Insert the images into the group blob on Azure.
router.use((req: Request, res: Response, next: NextFunction) => {

    var file = './images/' + req.file?.filename;
    const fileextension = req.file?.originalname.toString().split(".")[1];
    const fileName: string = 'group_' + res.locals.groupid + "_" + res.locals.group.Image_TimeStamp + "." + fileextension;

    let x: Group = res.locals.group;
    x.Background_FileName = fileName
    res.locals.group = x;


    createBlobOnContainer("groups", file, fileName).then((requestId: string | undefined) => {
        unlink(file, (err) => {
            if (err) {
                res.status(500).json({
                    Message: "Image Unlink Error.",
                    Detail: err
                });
            } else {
                res.status(200).json({
                    Message: "Group Added Successfully.",
                    Detail: res.locals.groupid,
                    blobRequestId: requestId
                });
            }
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Blob Creation Error.",
            Detail: String(err)
        });
    });
});

module.exports = router;