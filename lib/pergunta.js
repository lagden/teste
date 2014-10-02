'use strict';

var inquirer = require('inquirer'),
    async = require('async'),
    limpa = require('../lib/clear');

module.exports = function(questions, callback) {
    async.eachSeries(questions, function(question, cb) {
        limpa(function() {;
            inquirer.prompt(question, function(answer) {
                // console.log(answer);
                // GRAVAR NO JSON
                cb();
            });
        });
    }, function(err) {
        if (err) {
            console.log(err);
        } else {
            if (callback)
                callback();
        }
    });
};