'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function minItems(min) {
    return (value, data) => {
        if (value.length < min) {
            throw new helpers.RulesError('minItems', {
                ...data,
                min,
                value,
            });
        }
        return value;
    };
}

exports.minItems = minItems;
