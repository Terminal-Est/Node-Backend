import { NextFunction, Response } from "express";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => { 
    res.status(200).json({
        Message: "Refresh Token Issued",
        Token: res.locals.jwt
    });
});

module.exports = router;