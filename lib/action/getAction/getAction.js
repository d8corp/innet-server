'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Action = require('../Action/Action.js');

function getAction(handler) {
    return handler[Action.ACTION];
}

exports.getAction = getAction;
