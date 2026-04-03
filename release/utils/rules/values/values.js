'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function getArrayValues(values) {
    // @ts-expect-error TODO: Fix types
    return Array.isArray(values) ? values : Object.keys(values);
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
