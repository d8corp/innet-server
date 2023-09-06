'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useAction = require('../../../hooks/useAction/useAction.js');

const cookie = () => {
    const action = useAction.useAction();
    const _a = jsx.useProps(), { key, value } = _a, opt = tslib.__rest(_a, ["key", "value"]);
    action.setCookie(key, value, opt);
};

exports.cookie = cookie;
