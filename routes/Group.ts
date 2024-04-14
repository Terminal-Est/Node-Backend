import { NextFunction, Request, Response } from "express";
import { getGroupByID, getGroups, addGroup, joinGroup, getGroupByCategoryID, updateGroup } from "../controllers/groupController";
import { createBlobOnContainer } from "../controllers/fileController";
import { InsertResult } from "typeorm";
import { Group } from "../data/entity/group";
import { unlink } from 'fs';
var path = require('path');
var multer = require('multer');
var express = require('express');
var router = express.Router();
const sharp = require('sharp');

import {
    BlobServiceClient,
    ContainerClient,
    BlockBlobClient,
    StorageSharedKeyCredential,
    generateBlobSASQueryParameters,
    BlobSASPermissions,
    BlobClient
} from "@azure/storage-blob";

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

// Get all groups.
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
        res.json({
            Message: "Success",
            Detail: listofgroups
        })
    });
});

router.get('/files', (req: Request, res: Response, next: NextFunction) => {
    const containerClient = blobServiceClient.getContainerClient(
        'groups'
    );
    listBlobsFlatWithPageMarker(containerClient);

})

// Get group by ID.
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const groupid = parseInt(req.params.id);
    getGroupByID(groupid).then((value) => {

        const bgImgUrl = getBlobSaS("groups", String(value?.Background_FileName));

        res.status(200).json({
            Message: "Success",
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

router.get('/:id/thumbnail', (req: Request, res: Response, next: NextFunction) => {
    const groupid = parseInt(req.params.id);
    getGroupByID(groupid).then((value) => {
        if (value != null) {
            downloadBlobToFile(value.Background_FileName).then(() => {
                console.log('File downloaded');
                var file = path.join('../images/' + value?.Background_FileName);
                const fileextension = value?.Background_FileName.toString().split(".")[1];
                const fileName: string = path.join('../images/' + 'group_' + value?.ID + "_thumbnail." + fileextension);

                sharp(file).resize({ width: 100, height: 100, fit: 'fill' }).toFile(fileName)

                res.sendFile(__dirname + '/' + fileName);
            });
        }
    });
    /*
    unlink('../images/' + fileName, () => {
        // Do nothing.
    });
    */
});

// Get group category by ID.
router.get('/categories/:categoryid', (req: Request, res: Response, next: NextFunction) => {
    const categoryid: number = parseInt(req.params.categoryid);

    getGroupByCategoryID(categoryid).then((values) => {
        res.json(values)
    })
});

// Post to allow a user to join a group.
router.post('/:id/join', fieldsOnly, (req: Request, res: Response, next: NextFunction) => {
    const groupid: number = parseInt(req.params.id);
    const userid: number = parseInt(req.body.uuid);

    joinGroup(userid, groupid).then((handleFullfilled: InsertResult) => {
        res.json({
            Message: 'Success',
            Detail: handleFullfilled
        })
    })
});

// Create a group.
router.post('/', imageUploads.single('background'), (req: Request, res: Response, next: NextFunction) => {

    const ts = String(Date.now());
    const tempGroup = new Group();

    tempGroup.Name = req.body.Name;
    tempGroup.Description = req.body.Description;
    tempGroup.System = parseInt("1");
    tempGroup.CategoryID = req.body.categoryid;
    tempGroup.Location = req.body.Location;

    if (req.file != null) {
        tempGroup.Background_FileName = req.file.originalname;
        tempGroup.Image_TimeStamp = ts;
    }

    res.locals.group = tempGroup;

    next();
});

// Insert the database record first to get the GroupID to name the image.
router.use((req: Request, res: Response, next: NextFunction) => {

    let group: Group = res.locals.group;

    addGroup(group).then((handleFullfilled: InsertResult) => {
        res.locals.groupid = handleFullfilled.identifiers[0].ID;
        // Update group record with ID
        group.ID = handleFullfilled.identifiers[0].ID;
        res.locals.group = group;
        next();
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Success",
            Detail: handleRejected
        });
    });
});

/*
// Return a thumbnail from an image.
router.use((req: Request, res: Response, next: NextFunction) => {

    var file = './images/' + req.file?.filename;
    const fileextension = req.file?.originalname.toString().split(".")[1];
    const fileName: string = 'group_' + res.locals.groupid + "_thumbnail_" + res.locals.group.Image_TimeStamp + "." + fileextension;

    sharp(file).resize({ width: 100, height: 100, fit: 'fill' }).toFile('./images/' + fileName).then()

    next();
});
*/

// Insert the images into the group blob on Azure.
router.use((req: Request, res: Response, next: NextFunction) => {

    var file = './images/' + req.file?.filename;
    const fileextension = req.file?.originalname.toString().split(".")[1];
    const fileName: string = 'group_' + res.locals.groupid + "_" + res.locals.group.Image_TimeStamp + "." + fileextension;

    let x: Group = res.locals.group;
    x.Background_FileName = fileName
    res.locals.group = x;

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
                }
            });
            updateGroup(x);
            res.send(x);
        });
    } catch (e) {
        res.status(400).json({
            Message: "Upload Failed.",
            Detail: e
        });
    }
});

// Update the database with the new name for the group background image.
router.use((req: Request, res: Response, next: NextFunction) => {
    const tempGroup = res.locals.group;
    updateGroup(tempGroup);
    res.json(tempGroup);
});

async function listBlobsFlatWithPageMarker(containerClient: ContainerClient) {

    // page size - artificially low as example
    const maxPageSize = 100;

    let i = 1;
    let marker;

    // some options for filtering list
    const listOptions = {
        includeMetadata: false,
        includeSnapshots: false,
        includeTags: false,
        includeVersions: false,
        prefix: ''
    };

    let iterator = containerClient.listBlobsFlat(listOptions).byPage({ maxPageSize });
    let response = (await iterator.next()).value;

    // Prints blob names
    for (const blob of response.segment.blobItems) {
        console.log(`Flat listing: ${i++}: ${blob.name}`);
    }

    // Gets next marker
    marker = response.continuationToken;

    // Passing next marker as continuationToken    
    iterator = containerClient.listBlobsFlat().byPage({
        continuationToken: marker,
        maxPageSize: maxPageSize * 2
    });
    response = (await iterator.next()).value;

    /*
    // Prints next blob names
    for (const blob of response.segment.blobItems) {
        console.log(`Flat listing: ${i++}: ${blob.name}`);
    }
    */
}

async function downloadBlobToFile(blobName: string | undefined) {

    const path = require('path');
    const { dirname } = require('path');
    //const appDir = dirname(require.main.filename);

    console.log(path._makeLong('app.ts'));

    //const dirPath = path.join(__dirname, '/images');

    const containerClient = blobServiceClient.getContainerClient(
        'groups'
    );

    //const dirPath = path.join('C:\\Users\\Sasse.Mark\\Documents\\Education\\CPT331\\Node-Backend\\images\\', blobName);
    const dirPath = path.join('../images/', blobName);
    //const fileNameWithPath: string = ('./images/' + blobName)

    if (blobName) {
        const blobClient: BlobClient = containerClient.getBlobClient(blobName);
        await blobClient.downloadToFile(blobName);
    }
}

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