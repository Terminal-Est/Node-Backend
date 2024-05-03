import { Request, Response } from "express";
import { DeleteResult } from "typeorm";
import { updateUserBan } from "../../controllers/userController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response) => {
    
    const banned: number = Number(req.body.banned);
    const uuid = String(req.body.userId);
  
    updateUserBan(uuid, banned).then((handleFullfilled: DeleteResult) => {
        if (handleFullfilled.affected == 0) {
            res.status(400).json({
                Message: "No User Found",
                Detail: handleFullfilled
            })
        } else {
            res.status(200).json({
                Message: "User Ban Successfully Update.",
                Detail: handleFullfilled
            })
        }
    }, (hanleRejected) => {
        res.status(400).json({
            Message: "No User Found",
            Detail: hanleRejected
        });
    }).catch((err) => {
        res.status(500).json({
            Message: "User Ban Server Error.",
            Detail: err
        });
    })
})

module.exports = router;