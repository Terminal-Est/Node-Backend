import { NextFunction, Request, Response } from "express";
var user = require('../controllers/userController')

var express = require('express');
var router = express.Router();

router.get('/test', function(req : Request, res : Response, next : NextFunction) { 

    user.getHash(req.body.password).then(
    (handleBad: string) => 
    {
        res.status(400).json({error: handleBad})
    }, 
    (handleOk: string) => 
    {
        res.status(200).json({ok: handleOk})
    })
});
    

module.exports = router;