'use strict';

module.exports = function(module, json, callback) {
    require(module)(json, callback);
};