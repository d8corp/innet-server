'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function max(max) {
    return (value, data) => {
        if (!['bigint', 'number'].includes(typeof value)) {
            throw new helpers.RulesError('number', Object.assign(Object.assign({}, data), { value }));
        }
        if (value > max) {
            throw new helpers.RulesError('maximum', Object.assign(Object.assign({}, data), { max,
                value }));
        }
        return value;
    };
}

exports.max = max;
