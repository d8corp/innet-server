'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function multipleOf(multiple) {
    return (value, data) => {
        if (!['bigint', 'number'].includes(typeof value)) {
            throw new helpers.RulesError('number', {
                ...data,
                value,
            });
        }
        if (value % multiple) {
            throw new helpers.RulesError('multipleOf', {
                ...data,
                multiple,
                value,
            });
        }
        return value;
    };
}

exports.multipleOf = multipleOf;
