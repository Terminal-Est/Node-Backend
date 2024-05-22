import { Request, Response } from "express";
import { getAllUsers } from "../../controllers/userController";
import { User } from "../../data/entity/user";
import { logToFile } from "../../utils/logging";

var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response) => {
   
    const users: User[] = await getAllUsers()
        .then((handleFulfilled) => {
            return handleFulfilled;
        }, () => {
            return [];
        }).catch((err) => {
            logToFile(err);
            return [];
        });

    res.status(200).json({
        Message: "Users Returned.",
        Users: users
    }) 
});
module.exports = router;