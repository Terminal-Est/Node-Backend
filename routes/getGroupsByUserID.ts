import { NextFunction, Request, Response } from "express";
import { getGroupsByUserID } from "../controllers/groupController";
import { getBlobSaS } from "../controllers/fileController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const userid = parseInt(res.locals.userid);
    getGroupsByUserID(userid).then((values) => {
        res.json(values);
    })

});

module.exports = router;