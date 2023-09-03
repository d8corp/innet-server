'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function objectOf(map) {
    return (value, data) => {
        if (value === null || typeof value !== 'object') {
            throw new helpers.RulesError('object', Object.assign({ value }, data));
        }
        const result = {};
        for (const key in map) {
            const val = map[key](value[key], Object.assign(Object.assign({}, data), { key: helpers.addKey(key, data) }));
            if (val !== undefined) {
                result[key] = val;
            }
        }
        return result;
    };
}

exports.objectOf = objectOf;
