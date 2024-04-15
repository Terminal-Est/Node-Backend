import { NextFunction, Request, Response } from "express";
import { getCategories } from "../controllers/categoryController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    getCategories().then((value) => {
        res.json(value);
    });
});

module.exports = router;