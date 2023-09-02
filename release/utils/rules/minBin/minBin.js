'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function minBin(min) {
    return (value, data) => {
        if (value.size < min) {
            throw new helpers.RulesError('minBin', Object.assign({ value,
                min }, data));
        }
        return value;
    };
}

exports.minBin = minBin;
