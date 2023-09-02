'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function tupleOf(rules) {
    return (value, data) => {
        if (value === undefined) {
            throw new helpers.RulesError('tuple', data);
        }
        else if (!Array.isArray(value)) {
            value = [value];
        }
        const result = [];
        for (let index = 0; index < rules.length; index++) {
            result.push(rules[index](value[index], Object.assign(Object.assign({}, data), { key: helpers.addKey(index, data) })));
        }
        return result;
    };
}

exports.tupleOf = tupleOf;
