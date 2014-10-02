var exec = require('child_process').exec,
    util = require('util');

var cmd = /^win/.test(process.platform) ? 'cls' : 'clear';

module.exports = function(callback) {
    exec(cmd, function(error, stdout, stderr) {
        util.puts(stdout);
        if (callback)
            callback();
    });
}