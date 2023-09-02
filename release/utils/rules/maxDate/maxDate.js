'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function maxDate(max) {
    return (value, data) => {
        if (!(value instanceof Date)) {
            throw new helpers.RulesError('date', data);
        }
        if (value > max) {
            throw new helpers.RulesError('maxDate', Object.assign(Object.assign({}, data), { value, max: max.toISOString() }));
        }
        return value;
    };
}

exports.maxDate = maxDate;
