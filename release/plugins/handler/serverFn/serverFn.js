'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var watchState = require('watch-state');

const serverFn = () => {
    return () => {
        const handler = innet.useHandler();
        const fn = innet.useApp();
        new watchState.Watch((update) => {
            innet.innet(fn(update), handler);
        });
    };
};

exports.serverFn = serverFn;
