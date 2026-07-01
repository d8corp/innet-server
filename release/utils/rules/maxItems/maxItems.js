'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function maxItems(max) {
    return (value, data) => {
        if (value.length > max) {
            throw new helpers.RulesError('maxItems', {
                ...data,
                max,
                value,
            });
        }
        return value;
    };
}

exports.maxItems = maxItems;
