import { NextFunction, Request, Response } from "express";
import { joinGroup } from "../controllers/groupController"
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    const uuid = req.body.uuid;
    const groupid = req.body.groupid;

    joinGroup(uuid, groupid);

    res.send(200);
});

module.exports = router;