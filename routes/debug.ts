import { NextFunction, Request, Response } from "express";
var express = require('express');
var router = express.Router();

router.get('/', (req: Request, res : Response, next: NextFunction) => { 
    res.send("Hello, World");
});

module.exports = router;