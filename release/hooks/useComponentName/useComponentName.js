'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');

function useComponentName() {
    const { type } = innet.useApp();
    return type.name;
}

exports.useComponentName = useComponentName;
