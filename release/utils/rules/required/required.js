'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function required(rule) {
    return (value, data) => {
        if (value === undefined) {
            throw new helpers.RulesError('required', data);
        }
        return rule === null || rule === void 0 ? void 0 : rule(value, data);
    };
}

exports.required = required;
