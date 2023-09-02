'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function defaultTo(defaultValue) {
    return (value) => value !== undefined
        ? value
        : typeof defaultValue === 'function'
            ? defaultValue()
            : defaultValue;
}

exports.defaultTo = defaultTo;
