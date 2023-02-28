var express = require('express');
var security = require('../security/security')
var router = express.Router();

// TODO: Build this route as first call on API requests.
router.post('/getJWT', function(req, res, next) {
    const jwt = req.body.token;
    const publicKey = req.app.get('PublicKey');
    security.verifyToken(jwt, publicKey).then(handleFulfilled => {
        const payload = handleFulfilled.payload;
        res.locals.uid = payload.sub;
        next();
    }).catch(handleRejected => {
        res.status(400).json({
            "Message": "JWT failed to validate.",
            "payload": handleRejected
        });
    });
}, function(req, res, next) {
    const uid = res.locals.uid;
    const privateKey = req.app.get('PrivateKey');
    security.refreshAuthJWT(uid, privateKey).then(handleFulfilled => {
        res.locals.jwt = handleFulfilled;
        next();
    }, handleRejected => {
        res.status(400).json({
            "Message": "Token Generation Error",
            "data": handleRejected
        })
    });
});

module.exports = router;