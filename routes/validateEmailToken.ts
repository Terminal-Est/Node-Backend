import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../controllers/securityController";
import { logToFile } from "../utils/logging";
import { getUserUUID } from "../controllers/userController";
import { User } from "../data/entity/user";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response, next: NextFunction) => {

    const jwt = res.locals.token;
    const jwk1 = req.app.get('jwk1');
    const jwk2 = req.app.get('jwk2');

    const sub: string = await verifyToken(jwt, jwk1, jwk2).then((handleFulfilled : any) => {
        const payload = handleFulfilled.payload;
        return payload.sub;
    }, (handleRejected : any) => {
        const payload = handleRejected.payload;
        return payload.sub;
    }).catch((error: any) => {
        res.status(500).json({
            Message: "Exception Whilst Processing JWT",
            Exception: error
        });
        logToFile(error);
    });

    var user: User|null = await getUserUUID(sub).then((handlefulFilled) => {
        return handlefulFilled;
    }, () => {
        return null;
    }).catch((err) => {
        logToFile(err);
        return null;
    });

    if (user) {
        next();
    } else {
        res.status(400).json({
            Message: "Error Finding User."
        });
    }
});

module.exports = router;