'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useServerPlugin = require('../../../hooks/useServerPlugin/useServerPlugin.js');

const request = () => {
    const children = jsx.useChildren();
    useServerPlugin.useServerPlugin(() => children);
};

exports.request = request;
