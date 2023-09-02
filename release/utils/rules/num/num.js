'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function num(value, data) {
    const result = Number(value);
    if (isNaN(result) || result > Number.MAX_SAFE_INTEGER || result < -Number.MAX_SAFE_INTEGER) {
        throw new helpers.RulesError('number', Object.assign({ value }, data));
    }
    return result;
}

exports.num = num;
