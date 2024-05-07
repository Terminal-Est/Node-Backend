import { Request, Response } from "express";
import { getSponsorSID } from "../../controllers/sponsorController";
import { Sponsor } from "../../data/entity/sponsor";
import { logToFile } from "../../utils/logging";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response) => {

    var sponsor: Sponsor|null = await getSponsorSID(Number(res.locals.sid))
        .then((handleFulfilled: Sponsor) => {
            return handleFulfilled;
        }, () => {
            return null;
        }).catch((err) => {
            logToFile(err);
            return null;
        });

    if (sponsor) {
        res.status(200).json({
            Message: "Sponsor Found.",
            Detail: sponsor
        });
    } else {
        res.status(400).json({
            Message: "No Sponsor Found."
        });
    }
});

module.exports = router;