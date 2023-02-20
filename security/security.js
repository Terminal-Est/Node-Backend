var passhash = require('password-hash');

function generateHash(password) {
    var hashedPass = passhash.generate(password);
    return hashedPass;

}