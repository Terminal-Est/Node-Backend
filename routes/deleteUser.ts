import { NextFunction, Request, Response } from "express";
var express = require('express');
var router = express.Router();

router.use((req: Request, res : Response, next: NextFunction) => { 
    res.send("in deleteUser");
});

module.exports = router;