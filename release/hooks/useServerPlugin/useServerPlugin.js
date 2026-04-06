'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var watchState = require('watch-state');
require('../useServerPlugins/index.js');
var useServerPlugins = require('../useServerPlugins/useServerPlugins.js');

function useServerPlugin(listener) {
    const plugins = useServerPlugins.useServerPlugins();
    plugins.set(listener, innet.useHandler());
    watchState.onDestroy(() => {
        plugins.delete(listener);
    });
}

exports.useServerPlugin = useServerPlugin;
