'use strict';

var multiline = require('multiline'),
    pergunta = require('../lib/pergunta');

var qUm = multiline(function() {
    /*
Analise o código abaixo:

function basic() {
    var a = 10;
    if(a > 5)
        a = 7;
    console.log(a);
}

O que aparecerá na tela?

*/
});

var questions = [{
    type: 'list',
    name: 'quanto',
    message: 'Quer pagar quanto pelo seguro?',
    choices: ['R$ 100 + o dinheiro do busão', 'O suficiente', 'Eu sou Batman']
}];

module.exports = function(callback) {
    pergunta(questions, callback);
};
