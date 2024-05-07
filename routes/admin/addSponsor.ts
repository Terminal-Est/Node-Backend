import { NextFunction, Request, Response } from "express";
import { ValidationError } from "class-validator";
import { createSponsor, validateSponsor } from "../../controllers/sponsorController";
import { InsertResult } from "typeorm";
import { Sponsor } from "../../data/entity/sponsor";
var express = require('express');
var router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    
    var sponsor = new Sponsor();
    sponsor.email = req.body.email;
    sponsor.name = req.body.name;
    sponsor.description = req.body.description;
    sponsor.address = req.body.address;
    sponsor.city = req.body.city;
    sponsor.state = req.body.state;
    sponsor.postcode = req.body.postcode;
    sponsor.pnumber = req.body.pnumber;

    validateSponsor(sponsor).then(() => {
            res.locals.sponsor = sponsor;
            next();
    }, (handleRejected: ValidationError) => {
        res.status(400).json({
            Message: "Invalid Sponsor Details",
            Detail: handleRejected
        })
    });
});

router.use((req: Request, res: Response) => {
    
    const sponsor: Sponsor = res.locals.sponsor;

    createSponsor(sponsor).then((handleFulfilled: InsertResult) => {
        res.status(200).json({
            Message: "Sponsor Successfully Created.",
            Details: handleFulfilled,
        });
    }, (handleRejected: any) => {
        res.status(400).json({
            Message: "Sponsor Creation Error.",
            Details: handleRejected,
        });
    }).catch((err) => {
        res.status(400).json({
            Message: "Sponsor Creation Server Error.",
            Details: err,
        })
    })
});

module.exports = router;