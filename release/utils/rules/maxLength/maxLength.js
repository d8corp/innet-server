'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function maxLength(max) {
    return (value, data) => {
        if (typeof value !== 'string') {
            throw new helpers.RulesError('string', data);
        }
        if (value.length > max) {
            throw new helpers.RulesError('maxLength', Object.assign(Object.assign({}, data), { value,
                max }));
        }
        return value;
    };
}

exports.maxLength = maxLength;
