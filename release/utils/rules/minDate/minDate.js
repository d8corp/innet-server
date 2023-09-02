'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function minDate(min) {
    return (value, data) => {
        if (!(value instanceof Date)) {
            throw new helpers.RulesError('date', data);
        }
        if (value < min) {
            throw new helpers.RulesError('minDate', Object.assign(Object.assign({}, data), { value, min: min.toISOString() }));
        }
        return value;
    };
}

exports.minDate = minDate;
