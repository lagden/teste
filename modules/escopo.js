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

var qDois = '// O anteior foi bem fácil, veja esse:\n'.yellow + multiline(function() {/*

function fn() {
    if (true) {
        var a = 10;
    }
    console.log(a);
}

fn();

*/}) + '\n\n// O que aparecerá na tela?'.green;

var qTres = '// Agora um pouco de variáveis globais:\n'.yellow + multiline(function() {/*

var a = 5;

function fn1() {
    a = 6;
}

function fn2() {
    console.log(a);
}

fun1();
fun2();

*/}) + '\n\n// O que aparecerá na tela?'.green;

var qQuatro = '// Veja essa então:\n'.yellow + multiline(function() {/*

var a = 5;

function fn() {
    var a = 6;
    console.log(a);
}

fn();

*/}) + '\n\n// O que aparecerá na tela?'.green;

var qCinco = '// Um pouco mais complicado:\n'.yellow + multiline(function() {/*

var a = 6;
function fn() {
    var a = 7;
    function again() {
        var a = 8;
        console.log(a);
    }
    again();
    console.log(a);
}
fn();
​console.log(a);

*/}) + '\n\n// O que aparecerá na tela?'.green;

var qSeis = '// Vamos ver clausuras (closures):\n'.yellow + multiline(function() {/*

function getFunc() {
    var a = 7;
    return function(b) {
        console.log(a+b);
    }
}
var fn = getFunc();
fn(5);

*/}) + '\n\n// O que aparecerá na tela?'.green;

var qSete = '// Esse é um problema que acontece com frequência:\n'.yellow + multiline(function() {/*

var comandos = ['anda', 'pula', 'bate', 'defende'],
    fn = {};

for (var i = 0, len = comandos.length; i < len; i++) {
    var cmd = comandos[i];
    fn[cmd] = function() {
        console.log(cmd);
    }
}

fn['anda']();

*/}) + '\n\n// O que aparecerá na tela?'.green;

var qOito = '// E agora:\n'.yellow + multiline(function() {/*

var comandos = ['anda', 'pula', 'bate', 'defende'],
    fn = {};

comandos.map(function(cmd) {
    fn[cmd] = function() {
        console.log(cmd);
    }
})

fn['anda']();

*/}) + '\n\n// O que aparecerá na tela?'.green;

var questions = [{
    type: 'list',
    name: 'um',
    message: qUm,
    correta: '7',
    choices: ['7', '10', 'undefined', 'null']
}, {
    type: 'list',
    name: 'dois',
    message: qDois,
    correta: '10',
    choices: ['0', '10', 'undefined', 'null']
}, {
    type: 'list',
    name: 'tres',
    message: qTres,
    correta: '6',
    choices: ['5', '6', 'undefined', 'null']
}, {
    type: 'list',
    name: 'quatro',
    message: qQuatro,
    correta: '6',
    choices: ['5', '6']
}, {
    type: 'list',
    name: 'cinco',
    message: qCinco,
    correta: '8; 7; 6',
    choices: ['6; 7; 8', '7; 6; 8', '8; 7; 6', '8; 6; 7']
}, {
    type: 'list',
    name: 'seis',
    message: qSeis,
    correta: '12',
    choices: ['5', '7', '12', 'undefined', 'null']
}, {
    type: 'list',
    name: 'sete',
    message: qSete,
    correta: 'defende',
    choices: ['anda', 'pula', 'bate', 'defende']
}, {
    type: 'list',
    name: 'oito',
    message: qOito,
    correta: 'anda',
    choices: ['anda', 'pula', 'bate', 'defende']
}];

module.exports = function(json, callback) {
    pergunta(questions, json, callback);
};