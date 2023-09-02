'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function optional(rule) {
    return (value, data) => {
        if (value === undefined)
            return;
        return rule(value, data);
    };
}

exports.optional = optional;
