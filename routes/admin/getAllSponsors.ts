import { Request, Response } from "express";
import { getAllSponsors } from "../../controllers/sponsorController";
import { Sponsor } from "../../data/entity/sponsor";
import { logToFile } from "../../utils/logging";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response) => {

    var sponsors: Sponsor[]|null = await getAllSponsors()
        .then((handleFulfilled: Sponsor[]) => {
            return handleFulfilled;
        }, () => {
            return null;
        }).catch((err) => {
            logToFile(err);
            return null;
        });

    if (sponsors) {
        res.status(200).json({
            Message: "Sponsors Found.",
            Detail: sponsors
        });
    } else {
        res.status(400).json({
            Message: "No Sponsors Found."
        });
    }
});

module.exports = router;