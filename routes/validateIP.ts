import { NextFunction, Request, Response } from "express";
var https = require('https');
var express = require('express');
var router = express.Router();

/**
 * Middlware router for validating user IP address. Will respond 400 if the user is 
 * not from Australia.
 */
router.use((req: Request, res: Response, next: NextFunction) => {
    
    const ipAddress = req.header('x-forwarded-for')?.split(',');
    if (ipAddress) {
        const path: string = `/${ipAddress[0]}/json/`;
        const options = {
            path: path,
            host: 'ipapi.co',
            port: 443,
            headers: { 'User-Agent': 'nodejs-ipapi-v1.02' }
        };
        
        https.get(options, function (resp: any) {
            var body = ''
            resp.on('data', function (data: any) {
                body += data;
            });

            resp.on('end', function () {
                var loc = JSON.parse(body);
                if (String(loc.country_code) != 'AU') {
                    res.status(400).json({
                        Message: "Only users from Australia may register."
                    });
                } else {
                    res.status(200).json({
                        loc
                    });
                    // next();
                }
            });
        });
    } else {
        res.status(500).json({
            Message: "Forward Header Undefined."
        });
    }
});

module.exports = router;