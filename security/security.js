var bcrypt = require('bcrypt');
var dbapi = require('../dbapi/dbapi');

function hashPassword(uid, password) {
    
    const saltRounds = 10;
    this.password = password;
    this.uid = uid;
    const outer = this;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) throw err;
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) throw err;    
            dbapi.setPassHash(outer.uid, hash).catch(error => {
                throw (error);
            });
        });  
    });
}

module.exports = { hashPassword };