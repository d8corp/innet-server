'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function pipe(...rules) {
    return (value, data) => {
        return rules.reduce((value, rule) => rule(value, data), value);
    };
}

exports.pipe = pipe;
