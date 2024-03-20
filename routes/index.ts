import { NextFunction, Request, Response } from "express";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.use((req: Request, res: Response, next: NextFunction) => {
    res.sendFile('index.html', {
        root: './public'
    });
});

module.exports = router;
