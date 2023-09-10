'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
require('../useServerPlugins/index.js');
var useServerPlugins = require('../useServerPlugins/useServerPlugins.js');

function useServerPlugin(listener) {
    const requests = useServerPlugins.useServerPlugins();
    requests.add(listener);
    watchState.onDestroy(() => {
        requests.delete(listener);
    });
}

exports.useServerPlugin = useServerPlugin;
