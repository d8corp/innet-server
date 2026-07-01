'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function min(min, exclusive) {
    return (value, data) => {
        if (!['bigint', 'number'].includes(typeof value)) {
            throw new helpers.RulesError('number', {
                ...data,
                value,
            });
        }
        if ((exclusive && value === min) || value < min) {
            throw new helpers.RulesError('minimum', {
                ...data,
                min,
                value,
            });
        }
        return value;
    };
}

exports.min = min;
