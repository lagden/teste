'use strict';

var inquirer = require('inquirer'),
    fs = require('fs'),
    async = require('async'),
    limpa = require('../lib/clear');

module.exports = function(questions, json, callback) {
    async.eachSeries(questions, function(question, cb) {
        limpa(function() {;
            inquirer.prompt(question, function(answer) {
                var candidato = JSON.parse(fs.readFileSync(json));
                candidato.questionario.push({
                    pergunta: question.message,
                    resposta: answer[question.name],
                    correta: question.correta
                });
                var xxx = JSON.stringify(candidato);
                fs.writeFileSync(json, xxx.replace(/\\u001b\[[0-9]+m/img, ''));
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