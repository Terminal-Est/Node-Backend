import { NextFunction, Request, Response } from "express";
import { getCategories, getCategoryByID, addCategory } from "../controllers/categoryController";
import { createBlobOnContainer } from "../controllers/fileController";
import { Categories } from "../data/entity/category";
import { InsertResult } from "typeorm";
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

// Middleware for adding array of images to request of a size of 2.
const imageUploads = multer({ storage: imageStorage });

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    let listofgroups: Array<any> = new Array<any>();
    getCategories().then((values) => {
        values.forEach(function (value) {

            let iconUrl = getBlobSaS("categories", String(value?.Icon_FileName));
            let bgImgUrl = getBlobSaS("categories", String(value?.Background_FileName));

            let x = {
                ID: value.ID,
                Name: value.Name,
                iconImg: iconUrl,
                bgImg: bgImgUrl
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
    const categoryid = parseInt(req.params.id)
    getCategoryByID(categoryid).then((value) => {

        const iconUrl = getBlobSaS("categories", String(value?.Icon_FileName));
        const imgUrl = getBlobSaS("categories", String(value?.Background_FileName));

        res.status(200).json({
            Message: "Category Returned Successfully.",
            CategoryDetails: {
                id: value?.ID,
                name: value?.Name,
                iconImg: iconUrl,
                backgroundImg: imgUrl
            }
        });
    })
});

const catimages = imageUploads.fields([{ name: 'bgimage', maxcount: 1 }, { name: 'iconimage', maxcount: 1 }])
router.post('/', catimages, (req: Request, res: Response, next: NextFunction) => {
    const ts = String(Date.now());
    const tempCategory = new Categories();
    tempCategory.Name = req.body.Name;
    if (req.files != null) {
        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        tempCategory.Background_FileName = files['bgimage'][0].originalname;
        tempCategory.Icon_FileName = files['iconimage'][0].originalname;
    }
    tempCategory.Image_TimeStamp = ts;

    res.locals.category = tempCategory;

    next();
});

router.use((req: Request, res: Response, next: NextFunction) => {

    const requestId = res.locals.requestId;
    const tempCategory: Categories = res.locals.category

    addCategory(tempCategory).then((handleFullfilled: InsertResult) => {
        res.locals.categoryid = handleFullfilled.identifiers[0].ID;
        next();
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Categories Database Update Failed.",
            Detail: handleRejected
        });
    });
});

class GroupImage {
    file: string;
    filename: string;
}

router.use((req: Request, res: Response, next: NextFunction) => {

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    let x: Array<GroupImage> = new Array<GroupImage>();

    var bgfile = './images/' + files['bgimage'][0].filename;
    const bgfileextension = files['bgimage'][0].originalname.toString().split(".")[1];
    const bgfileName: string = 'category_' + res.locals.categoryid + "_bg_" + res.locals.category.Image_TimeStamp + "." + bgfileextension;
    let bgimage: GroupImage = { file: bgfile, filename: bgfileName}

    x.push(bgimage);

    var icofile = './images/' + files['iconimage'][0].filename;
    const icofileextension = files['iconimage'][0].originalname.toString().split(".")[1];
    const icofileName: string = 'category_' + res.locals.categoryid + "_ico_" + res.locals.category.Image_TimeStamp + "." + icofileextension;
    let icoimage: GroupImage = { file: icofile, filename: icofileName}
    x.push(icoimage);

    x.forEach((value) => {
        try {
            createBlobOnContainer("categories", value.file, value.filename).then((requestId: string | undefined) => {
                unlink(value.file, (err) => {
                    if (err) {
                        res.status(400).json({
                            Message: "File Upload Error.",
                            Detail: err
                        });
                    } else {
                        res.locals.requestId = requestId;
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
    res.json({
        CategoryID: res.locals.categoryid,
        Detail: "Created"
    })
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