import { NextFunction, Request, Response } from "express";
import { joinGroup } from "../controllers/groupController"
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    const userid: number = parseInt(req.body.uuid);
    const groupid: number = parseInt(req.body.groupid);

    joinGroup(userid, groupid);

    res.sendStatus(200);
});

module.exports = router;