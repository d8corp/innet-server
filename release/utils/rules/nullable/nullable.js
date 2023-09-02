'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function nullable(value, data) {
    if (value !== null) {
        throw new helpers.RulesError('null', data);
    }
    return null;
}

exports.nullable = nullable;
