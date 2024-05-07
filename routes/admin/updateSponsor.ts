import { NextFunction, Request, Response } from "express";
import { ValidationError } from "class-validator";
import { validateSponsor, getSponsorSID, updateSponsor } from "../../controllers/sponsorController";
import { UpdateResult } from "typeorm";
import { Sponsor } from "../../data/entity/sponsor";
import { logToFile } from "../../utils/logging";
var express = require('express');
var router = express.Router();

router.use(async(req: Request, res: Response, next: NextFunction) => {

    var sponsor: Sponsor|null = await getSponsorSID(Number(req.body.sid))
        .then((handleFulfilled: Sponsor) => {
            return handleFulfilled;
        }, () => {
            return null;
        }).catch((err) => {
            logToFile(err);
            return null;
        });

    if (sponsor) {
        res.locals.sponsor = sponsor;
        next();
    } else {
        res.status(400).json({
            Message: "No Sponsor Found"
        });
    }
});

router.use((req: Request, res: Response, next: NextFunction) => {
    
    var sponsor: Sponsor = res.locals.sponsor;
   
    if (req.body.email) {
        sponsor.email = req.body.email;
    }

    if (req.body.address) {
        sponsor.address = req.body.address;
    }

    if (req.body.city) {
        sponsor.city = req.body.city;
    }

    if (req.body.state) {
        sponsor.state = req.body.state;
    }

    if (req.body.postcode) {
        sponsor.postcode = req.body.postcode;
    }

    if (req.body.pnumber) {
        sponsor.pnumber = req.body.pnumber;
    }

    validateSponsor(sponsor).then(() => {
            next();
    }, (handleRejected: ValidationError) => {
        res.status(400).json({
            Message: "Invalid Sponsor Details",
            Detail: handleRejected
        });
    });
});

router.use((req: Request, res: Response) => {
    
    var sponsor: Sponsor = res.locals.sponsor;

    updateSponsor(sponsor).then((handleFulfilled: UpdateResult) => {
        res.status(200).send({
            Message: "Sponsor Updated Successfully.",
            Detail: handleFulfilled
        });
    }, (handleRejected: any) => {
        res.status(400).send({
            Message: "Sponsor Update Error.",
            Detail: handleRejected
        });
    }).catch((err) => {
        res.status(400).send({
            Message: "Sponsor Update Server Error.",
            Detail: err
        });
    });
});

module.exports = router;