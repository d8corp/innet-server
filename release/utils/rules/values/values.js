'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function values(values) {
    return (value, data) => {
        if (!values.includes(value)) {
            throw new helpers.RulesError('values', Object.assign(Object.assign({}, data), { value,
                values }));
        }
        return value;
    };
}

exports.values = values;
