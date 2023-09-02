'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function oneOf(formatters) {
    return (value, data) => {
        const errors = [];
        for (const formatter of formatters) {
            try {
                return formatter(value, data);
            }
            catch (e) {
                errors.push(e.data);
            }
        }
        throw new helpers.RulesError('oneOf', { errors });
    };
}

exports.oneOf = oneOf;
