var express = require('express');
var dbapi = require('../dbaccess/dbaccess')
var router = express.Router();

router.post('/addUser', function(req, res, next) {
    const uid = req.body.userId;
    const admin = req.body.admin;
    const auth = req.body.auth;
    const userName = req.body.username;
    dbapi.addUser(uid, admin, auth, userName).then(handleFulfilled => {
        res.locals.handleFulfilled = handleFulfilled;
        next();
    }, handleRejected => {
        res.status(400).json({
            "Message": "User Add Promise Rejected.", 
            "data": handleRejected
        });
    }).catch(error => { 
        res.status(400).json({
            "Message": "Add User Error", 
            "Stack Trace": error.message
        });
    });
}, function (req, res) {
    const uid = req.body.userId;
    const password = req.body.password;
    dbapi.setPassHash(uid, password).then(handleFulfilled => {
        res.status(200).json({
            "Message": "User Added Successfully.", 
            "User Database Updated": res.locals.handleFulfilled,
            "Hashed Pass Success": handleFulfilled
        });
    }, handleRejected => {
        res.status(400).json({
            "Message": "Hashing Promise Rejected", 
            "data": handleRejected
        });
    }).catch(error => {
        res.status(400).json({
            "Message": "Hashing Password Error", 
            "Stack Trace": error
        });
    });
});

module.exports = router;
