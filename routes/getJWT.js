var express = require('express');
var security = require('../security/security')
var router = express.Router();

// TODO: Build this route as first call on API requests. Also needs a refresh token.
router.post('/getJWT', function(req, res, next) {
    const uid = req.body.userId;
    const privateKey = req.app.get('RSAPrivKey')
    const getSignedJWT = function() {
        security.getAuthJWT(uid, privateKey).then(handleFullfilled => {
            res.status(200).json({
                "Message": "Token Created.",
                "Token": handleFullfilled
            });
        }, handleRejected => {
            res.status(400).json({
                "Message": "Token Generation Error",
                "data": handleRejected
            })
        });
    }
    getSignedJWT();
});

module.exports = router;