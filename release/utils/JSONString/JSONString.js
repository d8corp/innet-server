'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function JSONString(target) {
    return JSON.stringify(target, (key, value) => {
        if (typeof value === 'bigint') {
            return String(value);
        }
        return value;
    });
}

exports.JSONString = JSONString;
