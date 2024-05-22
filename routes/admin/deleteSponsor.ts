import { Request, Response } from "express";
import { deleteSponsorData } from "../../controllers/sponsorController";
import { logToFile } from "../../utils/logging";
import { DeleteResult } from "typeorm";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response) => {

    var deleted: DeleteResult|null = await deleteSponsorData(Number(req.body.sid))
        .then((handleFulfilled: DeleteResult) => {
            return handleFulfilled;
        }, () => {
            return null;
        }).catch((err) => {
            logToFile(err);
            return null;
        });

    if (deleted) {
        res.status(200).json({
            Message: "Sponsor Deleted.",
            Detail: deleted
        });
    } else {
        res.status(400).json({
            Message: "No Sponsor Found."
        });
    }
});

module.exports = router;