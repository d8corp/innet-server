'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function min(min) {
    return (value, data) => {
        if (!['number', 'bigint'].includes(typeof value)) {
            throw new helpers.RulesError('number', Object.assign(Object.assign({}, data), { value }));
        }
        if (value < min) {
            throw new helpers.RulesError('minimum', Object.assign(Object.assign({}, data), { value,
                min }));
        }
        return value;
    };
}

exports.min = min;
