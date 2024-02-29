import { NextFunction, Request, Response } from "express";

var express = require('express');
var router = express.Router();

router.get('/test', function(req : Request, res : Response, next : NextFunction) {
    res.status(200).json({
        "Message": "Hello, World!",
        "Token": res.locals.jwt
    });
});

module.exports = router;