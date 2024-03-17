import { NextFunction, Request, Response } from "express";
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/jwks', (req: Request, res: Response, next: NextFunction) => {
    const keys = fs.readFileSync('./public/Keys.json');
    const keyString = keys.toString();
    const keysJson = JSON.parse(keyString);
    res.send(keysJson);
});

module.exports = router;