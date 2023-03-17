'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
var Action = require('../../action/Action/Action.js');

function useAction() {
    return jsx.useHandler()[Action.ACTION];
}

exports.useAction = useAction;
