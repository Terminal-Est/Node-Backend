import { NextFunction, Request, Response } from "express";
import { logToFile } from "../../utils/logging";
import { getUserUUID } from "../../controllers/userController";
import { User } from "../../data/entity/user";
var express = require('express');
var router = express.Router();

/**
 * Middleware route for validating admin on admin specific routes.
 */
router.use(async(req: Request, res: Response, next: NextFunction) => {

    var uuid: string = req.body.uuid ? req.body.uuid : res.locals.uuid;

    var user: User|null = await getUserUUID(uuid).then((handlefulFilled) => {
        return handlefulFilled;
    }, () => {
        return null;
    }).catch((err) => {
        logToFile(err);
        return null;
    });

    if (user) {
        if (!user.admin) {
            res.status(403).json({
                Message: "User Access Denied."
            });
        } else {
            res.locals.adminUser = true;
            next();
        }
    } else {
        res.status(400).json({
            Message: "Error Finding User."
        });
    }
});

module.exports = router;