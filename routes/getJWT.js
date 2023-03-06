var express = require('express');
var security = require('../security/security')
var logFile = require('../utils/logging')
var router = express.Router();

// TODO: Thorough unit testing to validate proper rotation mechanisms.
router.post('/getJWT', function(req, res, next) {
    const jwt = req.body.token;
    const jwk1 = req.app.get('jwk1');
    const jwk2 = req.app.get('jwk2');
    security.verifyToken(jwt, jwk1, jwk2).then(handleFulfilled => {
        const payload = handleFulfilled.payload;
        res.locals.uid = payload.sub;
        next();
    }, handleRejected => {
        res.status(400).json({
            "Message": "Jwt failed to validate",
            "Payload": handleRejected
        });;
    }).catch(error => {
        res.status(500).json({
            "Message": "Exception whilst processing jwt.",
            "Exception": error
        });
        logFile.logToFile(error);
    });
}, function(req, res, next) {
    const uid = res.locals.uid;
    var jwk;
    var keySet;
    var kid;
    if(req.app.get('onKey2')) {
        keySet = req.app.get('KeySet2');
        jwk = req.app.get('jwk2');
        kid = jwk.kid;
    } else {
        keySet = req.app.get('KeySet1');
        jwk = req.app.get('jwk1');
        kid = jwk.kid;
    }
    security.refreshAuthJWT(uid, keySet.private, kid).then(handleFulfilled => {
        res.locals.jwt = handleFulfilled;
        res.status(200).json({
            "token": handleFulfilled
        });  
        //next();
    }, handleRejected => {
        res.status(400).json({
            "Message": "Token Generation Error",
            "Payload": handleRejected
        })
    }).catch(error => {
        res.status(500).json({
            "Message": "Exception whilst generating token.",
            "Exception": error
        });
        logFile.logToFile(error);
    });
});

module.exports = router;