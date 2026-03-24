'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useServerPlugin = require('../../../hooks/useServerPlugin/useServerPlugin.js');

function preset() {
    const children = jsx.useChildren();
    useServerPlugin.useServerPlugin(() => {
        innet.innet(children, innet.useHandler());
    });
}

exports.preset = preset;
