import { NextFunction, Request, Response } from "express";
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/.well-known/jwks', function(req: Request, res: Response, next: NextFunction) {
    const keys = fs.readFileSync('./public/keys.json');
    const keyString = keys.toString();
    const keysJson = JSON.parse(keyString);
    res.send(keysJson);
});

module.exports = router;