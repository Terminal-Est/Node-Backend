import { NextFunction, Request, Response } from "express";
import { addGroup } from "../controllers/groupController"
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    const ID = req.body.ID;
    const Name = req.body.Name;
    const Description = req.body.Description;
    const System = req.body.System;

    addGroup(ID, Name, Description, System);

    res.send(200);
});

module.exports = router;