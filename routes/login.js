var express = require('express');
var security = require('../security/security');
var router = express.Router();

router.get('/login', function(req, res) {
    const uid = req.body.userId;
    const pass = req.body.password;
    security.userLogin(uid, pass).then(handleFulfilled => {
        if (handleFulfilled.login) {
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
            security.getAuthJWT(uid, keySet.private, kid).then(handleFulfilled => {
                res.locals.jwt = handleFulfilled;
                res.status(200).json({
                    "Message": "Login Successful",
                    "token": handleFulfilled
                });  
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
        } else {
            res.status(400).json({
                "Message": "Login Failed"
            });
        }
    }, handleRejeted => {
        res.status(400).json({
            "Message": handleRejeted
        });
    }).catch(error => {
        res.status(500).json({
            "Message": "Login exception",
            "Exception": error
        });
    });
});

module.exports = router;