import { NextFunction, Request, Response } from "express";
import { joinGroup } from "../controllers/groupController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    const groupid: number = parseInt(req.params.id);
    const userid: number = parseInt(req.body.uuid);

    joinGroup(userid, groupid);

    res.sendStatus(200);
});

module.exports = router;