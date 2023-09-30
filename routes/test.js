var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
    res.status(200).json({
        "Message": "Hello, World!",
        "Token": res.locals.jwt
    });
});

module.exports = router;