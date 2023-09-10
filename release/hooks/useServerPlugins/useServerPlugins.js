'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const serverPlugins = new jsx.Context();
function useServerPlugins() {
    const plugins = jsx.useContext(serverPlugins);
    if (!plugins) {
        useThrow.useThrow('Use <{type}> in <server>');
    }
    return plugins;
}

exports.serverPlugins = serverPlugins;
exports.useServerPlugins = useServerPlugins;
