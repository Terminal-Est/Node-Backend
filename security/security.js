var bcrypt = require('bcrypt');
var dbapi = require('../dbapi/dbapi');

function hashPassword(uid, password) {
    const saltRounds = 10;
     
}