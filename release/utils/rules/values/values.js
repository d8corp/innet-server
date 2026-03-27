'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function getArrayValues(values, format = (value => value)) {
    return Array.isArray(values) ? values.map(format) : Object.keys(values).map(format);
}
function values(values) {
    return (value, data) => {
        if (!values.includes(value)) {
            throw new helpers.RulesError('values', {
                ...data,
                value,
                values,
            });
        }
        return value;
    };
}

exports.getArrayValues = getArrayValues;
exports.values = values;
