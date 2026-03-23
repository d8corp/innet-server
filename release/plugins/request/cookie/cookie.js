'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useAction = require('../../../hooks/useAction/useAction.js');

const cookie = () => {
    const action = useAction.useAction();
    const { key, value, ...opt } = jsx.useProps();
    action.setCookie(key, value, opt);
};

exports.cookie = cookie;
