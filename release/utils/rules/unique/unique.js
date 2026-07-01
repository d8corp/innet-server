'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function unique(value, data) {
    const uniqueValues = new Set(value);
    if (value.length !== uniqueValues.size) {
        throw new helpers.RulesError('unique', {
            ...data,
            value,
        });
    }
    return value;
}

exports.unique = unique;
