'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var watchState = require('watch-state');
require('../../handler/index.js');
var handler = require('../../handler/handler.js');

async function runTest(app) {
    const { promise: start, resolve: onStart, } = Promise.withResolvers();
    const { promise: end, resolve: onEnd, } = Promise.withResolvers();
    const server = new watchState.Watch(() => {
        innet.innet(app(onStart, onEnd), handler.handler);
    });
    await start;
    return async () => {
        server.destroy();
        await end;
    };
}

exports.runTest = runTest;
