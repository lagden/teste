'use strict'

var path = require('path'),
    fs = require('fs'),
    inquirer = require('inquirer'),
    jade = require('jade'),
    colors = require('colors'),
    slug = require('slug'),
    limpa = require('./lib/clear'),
    carrega = require('./lib/load');

var candidato,
    candidatoHTML;

var app = {
    intro: {
        type: 'input',
        name: 'intro',
        message: 'Qual é o seu nome?',
    },
    question: {
        type: 'list',
        name: 'test',
        message: 'Escolha o teste:'.green,
        choices: [
            'Escopo',
            'Objeto',
            'Sair do teste'.red
        ]
    },
    render: function() {
        var template = path.join(__dirname, 'template/out.jade'),
            dados = JSON.parse(fs.readFileSync(candidato)),
            str = require('fs').readFileSync(template, 'utf8'),
            fn = jade.compile(str, {
                filename: path,
                pretty: true
            });

        fs.writeFileSync(candidatoHTML, fn(dados));
    },
    init: function() {
        limpa(function() {
            inquirer.prompt(app.intro, function(answer) {
                var r = answer.intro;
                var fileJson = path.join(__dirname, 'candidatos');
                var fileHtml = path.join(__dirname, 'html');
                var dn = Date.now();
                var slugName = slug(r);

                candidato = fileJson + '/' + slugName + dn + '.json';
                candidatoHTML = fileHtml + '/' + slugName + dn + '.html';

                fs.writeFileSync(candidato, '{"nome": "' + r + '", "questionario":[]}');
                app.questionario();
            });
        });
    },
    questionario: function() {
        limpa(function() {
            inquirer.prompt(app.question, function(answer) {
                var r = answer.test;
                if (r !== 'Sair do teste'.red) {
                    var modulePath = path.join(__dirname, 'modules');
                    var m = modulePath + '/' + answer.test.toLowerCase();
                    carrega(m, candidato, function() {
                        var choices = app.question.choices;
                        var index = choices.indexOf(answer.test);
                        choices.splice(index, 1);
                        if (choices.length > 1) {
                            app.questionario();
                        } else {
                            console.log('\nTeste finalizado\n'.blue);
                            process.exit();
                        }
                    });
                } else {
                    process.exit();
                }
            });
        });
    }
}

process.on('exit', function() {
    app.render();
});

app.init();