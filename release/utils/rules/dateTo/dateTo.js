'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function dateTo(value, data) {
    const result = new Date(value);
    if (isNaN(result)) {
        throw new helpers.RulesError('date', Object.assign({ value }, data));
    }
    return result;
}

exports.dateTo = dateTo;
