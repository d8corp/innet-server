'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

function pattern(pattern, patternId = String(pattern)) {
    const normPattern = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
    return (value, data) => {
        if (!normPattern.test(value)) {
            throw new helpers.RulesError('pattern', Object.assign({ pattern: String(normPattern), patternId,
                value }, data));
        }
        return value;
    };
}

exports.pattern = pattern;
