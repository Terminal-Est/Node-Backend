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
    getCategories().then((value) => {
        res.json(value);
    });
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const categoryid = parseInt(req.params.id)
    getCategoryByID(categoryid).then((value) => {
        res.json(value);
    });
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

    res.locals.group = tempCategory;

    next();
});

router.use((req: Request, res: Response, next: NextFunction) => {

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const listoffiles: Array<any> = new Array<Express.Multer.File[]>;
    listoffiles.push(files['bgimage'][0]);
    listoffiles.push(files['iconimage'][0]);

    listoffiles.forEach(function (imagefile) {
        var file = './images/' + imagefile.filename;
        const fileName: string = String(imagefile.originalname);

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
    })
});

router.use((req: Request, res: Response, next: NextFunction) => {

    const requestId = res.locals.requestId;
    const tempCategory: Categories = res.locals.group

    addCategory(tempCategory).then((handleFullfilled: InsertResult) => {
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

module.exports = router;