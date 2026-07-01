'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function max(max, exclusive) {
    return (value, data) => {
        if (!['bigint', 'number'].includes(typeof value)) {
            throw new helpers.RulesError('number', {
                ...data,
                value,
            });
        }
        if ((exclusive && value === max) || value > max) {
            throw new helpers.RulesError('maximum', {
                ...data,
                exclusive,
                max,
                value,
            });
        }
        return value;
    };
}

exports.max = max;
