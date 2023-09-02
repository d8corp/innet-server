'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function minLength(min) {
    return (value, data) => {
        if (typeof value !== 'string') {
            throw new helpers.RulesError('string', data);
        }
        if (value.length < min) {
            throw new helpers.RulesError('minLength', Object.assign(Object.assign({}, data), { value,
                min }));
        }
        return value;
    };
}

exports.minLength = minLength;
