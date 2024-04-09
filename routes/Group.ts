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

import {
    BlobServiceClient,
    ContainerClient,
    BlockBlobClient,
    StorageSharedKeyCredential,
    generateBlobSASQueryParameters,
    BlobSASPermissions
} from "@azure/storage-blob";
import { AppDataSource } from "../data/data-source";
import { validate } from "class-validator";
import { Video } from "../data/entity/video";

const sasKey = "m9GyAx3fjQ554KzLQd3D5lQQJtElhOM0ZIm1oY6byhaqShGpXgg6ovUUx3M1RT5Bjp4OQEBLXYo8+ASteExa0g==";
const accountName = "greetikstorage";

var connString: string = String(process.env.AZURE_BLOB_STORAGE);

const blobServiceClient = BlobServiceClient.fromConnectionString(connString);

const imageStorage = multer.diskStorage({
    fileFilter: function (req: any, file: any, cb: any) {
        imageMimeTypeCheck(req, file, cb);
    },
    limits: {
        // Limit file size to 5 meg.
        fileSize: 5000000
    },
    destination: function (req: any, file: any, cb: any) {
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

const fieldsOnly = multer().none();

// Middleware for adding array of images to request of a size of 2.
const imageUploads = multer({ storage: imageStorage });

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    let listofgroups: Array<any> = new Array<any>();
    getGroups().then((values) => {
        values.forEach(function (value) {
            let bgImgUrl = getBlobSaS("groups", String(value?.Background_FileName));

            let x = {
                id: value?.ID,
                name: value?.Name,
                description: value?.Description,
                location: value?.Location,
                categoryId: value?.CategoryID,
                backgroundImg: bgImgUrl
            }

            listofgroups.push(x)
        })
        res.status(200).json({
            Message: "Groups Returned Successfully.",
            listofgroups
        })
    });
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const groupid = parseInt(req.params.id);
    getGroupByID(groupid).then((value) => {

        const bgImgUrl = getBlobSaS("groups", String(value?.Background_FileName));

        res.status(200).json({
            Message: "Group Returned Successfully.",
            GroupDetails: {
                id: value?.ID,
                name: value?.Name,
                description: value?.Description,
                location: value?.Location,
                categoryId: value?.CategoryID,
                backgroundImg: bgImgUrl
            }
        });
    })
});

router.get('/categories/:categoryid', (req: Request, res: Response, next: NextFunction) => {
    const categoryid: number = parseInt(req.params.categoryid);

    getGroupByCategoryID(categoryid).then((values) => {
        res.json(values)
    })
});

router.post('/:id/join', fieldsOnly, (req: Request, res: Response, next: NextFunction) => {
    const groupid: number = parseInt(req.params.id);
    const userid: number = parseInt(req.body.uuid);

    joinGroup(userid, groupid);

    res.sendStatus(200);
});

router.post('/', imageUploads.single('background'), (req: Request, res: Response, next: NextFunction) => {
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

router.use((req: Request, res: Response, next: NextFunction) => {

    var file = './images/' + req.file?.filename;
    const fileName: string = String(req.file?.originalname);

    try {
        createBlobOnContainer("groups", file, fileName).then((requestId: string | undefined) => {
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

router.use((req: Request, res: Response, next: NextFunction) => {

    const requestId = res.locals.requestId;
    const group: Group = res.locals.group;

    addGroup(group).then((handleFullfilled: InsertResult) => {
        res.status(200).json({
            Message: "Group Created Successful.",
            Detail: handleFullfilled,
            blobReqId: res.locals.requestId,
            filename: req.file?.filename
        });
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Group Database Update Failed.",
            Detail: handleRejected
        });
    });
});

function getBlobSaS(container: string, fileName: string) {
    try {
        const creds = new StorageSharedKeyCredential(accountName, sasKey);
        const blobServiceClient: BlobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, creds);
        const client = blobServiceClient.getContainerClient(container);
        const blobClient = client.getBlobClient(fileName);

        const blobSaS = generateBlobSASQueryParameters({
            containerName: container,
            blobName: fileName,
            permissions: BlobSASPermissions.parse("r"),
            startsOn: new Date(),
            expiresOn: new Date(new Date().valueOf() + 600000)
        }
            , creds).toString();

        const sasUrl: string = blobClient.url + "?" + blobSaS;
        return sasUrl;
    } catch (e) {
        throw e;
    }
}

module.exports = router;