'use strict';

var multiline = require('multiline'),
    colors = require('colors'),
    pergunta = require('../lib/pergunta');

var qUm = '// Veja com atenção e responda:\n'.yellow + multiline(function() {/*

var a = {};
var b = {};
var map = {}

map[a] = 'a';
map[b] = 'b';

console.log(map[a]);

*/}) + '\n\n// O que aparecerá na tela?'.green;

var questions = [{
    type: 'list',
    name: 'um',
    message: qUm,
    correta: 'b',
    choices: ['a', 'b', '[object Object]', 'null']
}];

module.exports = function(json, callback) {
    pergunta(questions, json, callback);
};
