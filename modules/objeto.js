'use strict';

var multiline = require('multiline'),
    colors = require('colors'),
    pergunta = require('../lib/pergunta');

var qUm = '// Leia o código abaixo e responda:\n'.yellow + multiline(function() {/*

function fn() {
    var a = 10;
    if(a > 5)
        a = 7;
    console.log(a);
}

fn();

*/}) + '\n\n// O que aparecerá na tela?'.green;

var questions = [{
    type: 'list',
    name: 'quanto',
    message: 'Quer pagar quanto pelo seguro?',
    correta: 'Eu sou Batman',
    choices: ['R$ 100 + o dinheiro do busão', 'O suficiente', 'Eu sou Batman']
}];

module.exports = function(json, callback) {
    pergunta(questions, json, callback);
};
