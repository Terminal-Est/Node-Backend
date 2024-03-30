import { NextFunction, Request, Response } from "express";
import { getGroups } from "../controllers/groupController";
import { Group } from "../data/entity/group";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    const Groups = new Promise((resolve, reject) => {
        getGroups();
    })
    res.status(200).json({Groups});
});

module.exports = router;