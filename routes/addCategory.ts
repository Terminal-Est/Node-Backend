import { NextFunction, Request, Response } from "express";
import { addCategory, updateCategory } from "../controllers/categoryController";
import { createBlobOnContainer } from "../controllers/fileController";
import { Categories } from "../data/entity/category";
import { InsertResult, UpdateResult } from "typeorm";
import { unlink } from 'fs';
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const ts = String(Date.now());
    const tempCategory = new Categories();
    tempCategory.Name = req.body.Name;
    if (req.files) {
        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        tempCategory.Background_FileName = files['bgimage'][0].originalname;
        tempCategory.Icon_FileName = files['iconimage'][0].originalname;
        tempCategory.Image_TimeStamp = ts;
        res.locals.category = tempCategory;
        next();
    } else {
        res.status(400).json({
            Message: "Please include images with request."
        })
    }
});

router.use((req: Request, res: Response, next: NextFunction) => {

    let tempCategory: Categories = res.locals.category

    addCategory(tempCategory).then((handleFullfilled: InsertResult) => {
        tempCategory.ID = handleFullfilled.identifiers[0].ID;
        next();
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Categories Database Update Failed.",
            Detail: handleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "Categories Database Error.",
            Detail: err
        });
    });
});

router.use((req: Request, res: Response, next: NextFunction) => {

    let tempCategory: Categories = res.locals.category;

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    let x: Array<GroupImage> = new Array<GroupImage>();

    var bgfile = './images/' + files['bgimage'][0].filename;
    const bgfileextension = files['bgimage'][0].originalname.toString().split(".")[1];
    const bgfileName: string = 'category_' + tempCategory.ID + "_bg_" + res.locals.category.Image_TimeStamp + "." + bgfileextension;
    let bgimage: GroupImage = { file: bgfile, filename: bgfileName }

    x.push(bgimage);

    var icofile = './images/' + files['iconimage'][0].filename;
    const icofileextension = files['iconimage'][0].originalname.toString().split(".")[1];
    const icofileName: string = 'category_' + tempCategory.ID + "_ico_" + res.locals.category.Image_TimeStamp + "." + icofileextension;
    let icoimage: GroupImage = { file: icofile, filename: icofileName }
    x.push(icoimage);

    x.forEach((value) => {
        createBlobOnContainer("categories", value.file, value.filename).then((requestId: string | undefined) => {
            unlink(value.file, (err) => {
                if (err) {
                    res.status(500).json({
                        Message: "Image Unlink Error.",
                        Detail: err
                    });
                } else {
                    res.locals.requestId = requestId;
                }
            });
        }).catch((err) => {
            res.status(500).json({
                Message: "Blob Creation Error.",
                Detail: err
            });
        });
    });
    tempCategory.Background_FileName = bgfileName;
    tempCategory.Icon_FileName = icofileName;

    res.locals.category = tempCategory;
    next();
    /*
    res.status(200).json({
        Message: "Category Successfully Created",
        CategoryID: res.locals.categoryid,
        Detail: "Created"
    })
    */
});


router.use((req: Request, res: Response, next: NextFunction) => {

    const tempCategory: Categories = res.locals.category

    updateCategory(tempCategory).then((handleFulfilled: UpdateResult) => {
        res.status(200).json({
            Message: "Category Created.",
            Detail: tempCategory
        });
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Image Update Failed.",
            Detail: handleRejected
        })
    }).catch((err) => {
        res.status(500).json({
            Message: "Categories Database Error.",
            Detail: err
        })
    })
});

// Data class for GroupImage object.
class GroupImage {
    file: string;
    filename: string;
}

module.exports = router;
