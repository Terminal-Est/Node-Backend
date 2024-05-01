import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../controllers/securityController";
import { getUserUUID, setUserAthenticated } from "../controllers/userController";
import { User } from "../data/entity/user";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    
    const jwt: string = res.locals.token;
    const jwk1 = req.app.get('jwk1');
    const jwk2 = req.app.get('jwk2');

    verifyToken(jwt, jwk1, jwk2).then((handleFulfilled) => {
        
        const payload = handleFulfilled.payload;

        getUserUUID(payload.sub).then((handleFulfilled) => {
            if (String(handleFulfilled.uuid) == String(payload.sub)) {
                res.locals.user = handleFulfilled;
                next();
            } else {
                res.redirect('https://develop.d1yh0kru3rdga7.amplifyapp.com/login');
            }
        }, () => {
            res.redirect('https://develop.d1yh0kru3rdga7.amplifyapp.com/login');
        });

    }, () => {
        res.redirect('https://develop.d1yh0kru3rdga7.amplifyapp.com/login');
    }).catch((err) => {
        res.status(500).json({
            Message: "Token Verification Error.",
            Detail: err
        });
    });
});

router.use((req: Request, res: Response) => {

    const user: User = res.locals.user;

    setUserAthenticated(String(user.uuid), true).then(() => {
        res.redirect('https://develop.d1yh0kru3rdga7.amplifyapp.com/login');
    }).catch(() => {
        res.redirect('https://develop.d1yh0kru3rdga7.amplifyapp.com/login');
    })
});

module.exports = router;