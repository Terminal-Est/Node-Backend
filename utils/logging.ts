var fs = require('fs');
var util = require('util');

function logToFile(message : string) {
    var logFile = path.resolve('./debug.log');
    var date = new Date();
    var stream = fs.createWriteStream(logFile, {flags : 'a'});
    stream.write(util.format(message) + ' : ' + date.toString() + '\n');
}

module.exports = { logToFile };