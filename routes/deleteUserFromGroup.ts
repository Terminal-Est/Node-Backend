import { Request, Response } from "express";
import { DeleteResult } from "typeorm";
import { leaveGroup } from "../controllers/groupController";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response) => {
    
    var uuid: number;
    const groupid: number = Number(req.body.groupid);

    if (res.locals.adminUser) {
        uuid = Number(req.body.userId);
    } else {
        uuid = Number(req.body.uuid);
    }

    leaveGroup(uuid, groupid).then((handleFullfilled: DeleteResult) => {
        if (handleFullfilled.affected == 0) {
            res.status(400).json({
                Message: "No User Found",
                Detail: handleFullfilled
            })
        } else {
            res.status(200).json({
                Message: "User Successfully Removed From Group.",
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
            Message: "Delete UserGroup Server Error.",
            Detail: err
        });
    })
})

module.exports = router;