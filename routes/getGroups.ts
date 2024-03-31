import { NextFunction, Request, Response } from "express";
import { getGroups } from "../controllers/groupController";
import { Group } from "../data/entity/group";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    getGroups().then((value) => {
        res.json(value);
    });
});

module.exports = router;