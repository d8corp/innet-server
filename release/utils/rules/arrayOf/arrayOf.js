'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function arrayOf(formatter) {
    return (value, data) => {
        if (value === undefined) {
            throw new helpers.RulesError('array', data);
        }
        else if (!Array.isArray(value)) {
            value = [value];
        }
        return value.map((val, index) => formatter(val, Object.assign(Object.assign({}, data), { key: helpers.addKey(index, data) })));
    };
}

exports.arrayOf = arrayOf;
