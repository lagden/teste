'use strict';

var multiline = require('multiline'),
    pergunta = require('../lib/pergunta');

var qUm = multiline(function() {/*
Analise o código abaixo:

function fn() {
    var a = 10;
    if(a > 5)
        a = 7;
    console.log(a);
}

fn();

O que aparecerá na tela?

*/
});

var qDois = multiline(function() {/*
O anteior foi bem fácil, veja esse:

function fn() {
    if (true) {
        var a = 10;
    }
    console.log(a);
}

fn();

O que aparecerá na tela?

*/
});

var qTres = multiline(function() {/*
Agora um pouco de variáveis globais:

var a = 5;

function fn1() {
    a = 6;
}

function fn2() {
    console.log(a);
}

fun1();
fun2();

O que aparecerá na tela?

*/
});

var qQuatro = multiline(function() {/*
Veja essa então:

var a = 5;

function fn() {
    var a = 6;
    console.log(a);
}

fun();

O que aparecerá na tela?

*/
});

var qCinco = multiline(function() {/*
Um pouco mais complicado:

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

O que aparecerá na tela?

*/
});

var qSeis = multiline(function() {/*
Vamos ver clausuras (closures):

function getFunc() {
    var a = 7;
    return function(b) {
        console.log(a+b);
    }
}
var fn = getFunc();
fn(5);

O que aparecerá na tela?

*/
});

var qSete = multiline(function() {/*
Esse é um problema que acontece com frequência:

var comandos = ['anda', 'pula', 'bate', 'defende'],
    fn = {};

for (var i = 0, len = comandos.length; i < len; i++) {
    var cmd = comandos[i];
    fn[cmd] = function() {
        console.log(cmd);
    }
}

fn['anda']();

O que aparecerá na tela?

*/
});

var qOito = multiline(function() {/*
E agora:

var comandos = ['anda', 'pula', 'bate', 'defende'],
    fn = {};

comandos.map(function(cmd) {
    fn[cmd] = function() {
        console.log(cmd);
    }
})

fn['anda']();

O que aparecerá na tela?

*/
});

var questions = [{
    type: 'list',
    name: 'um',
    message: qUm,
    choices: ['7', '10', 'undefined', 'null']
}, {
    type: 'list',
    name: 'dois',
    message: qDois,
    choices: ['0', '10', 'undefined', 'null']
}, {
    type: 'list',
    name: 'tres',
    message: qTres,
    choices: ['5', '6', 'undefined', 'null']
}, {
    type: 'list',
    name: 'quatro',
    message: qQuatro,
    choices: ['5', '6']
}, {
    type: 'list',
    name: 'cinco',
    message: qCinco,
    choices: ['6; 7; 8', '7; 6; 8', '8; 7; 6', '8; 6; 7']
}, {
    type: 'list',
    name: 'seis',
    message: qSeis,
    choices: ['5', '7', '12', 'undefined', 'null']
}, {
    type: 'list',
    name: 'sete',
    message: qSete,
    choices: ['anda', 'pula', 'bate', 'defende']
}, {
    type: 'list',
    name: 'oito',
    message: qOito,
    choices: ['anda', 'pula', 'bate', 'defende']
}];

module.exports = function(callback) {
    pergunta(questions, callback);
};