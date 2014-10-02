'use strict'

var path = require('path'),
    inquirer = require('inquirer'),
    limpa = require('./lib/clear'),
    carrega = require('./lib/load');

var app = {
    question: {
        type: 'list',
        name: 'test',
        message: 'Escolha o teste:',
        choices: [
            'Escopo',
            'Objeto',
            'Sair do teste'
        ]
    },
    init: function() {
        limpa(function(){
            inquirer.prompt(app.question, function(answer) {
                var r = answer.test;
                if(r !== 'Sair do teste') {
                    var modulePath = path.join(__dirname, 'modules');
                    var m = modulePath + '/' + answer.test.toLowerCase();
                    carrega(m, function() {
                        var choices = app.question.choices;
                        var index = choices.indexOf(answer.test);
                        choices.splice(index, 1);
                        if (choices.length > 0) {
                            app.init();
                        } else {
                            console.log('\nTeste finalizado\n');
                        }
                    });
                }
            });
        });
    }
}

app.init();