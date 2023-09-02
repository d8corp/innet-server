'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function maxBin(max) {
    return (value, data) => {
        if (value.size > max) {
            throw new helpers.RulesError('maxBin', Object.assign({ value,
                max }, data));
        }
        return value;
    };
}

exports.maxBin = maxBin;
