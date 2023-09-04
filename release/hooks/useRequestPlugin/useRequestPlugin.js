'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
require('../useApi/index.js');
var useApi = require('../useApi/useApi.js');

function useRequestPlugin(listener) {
    const { requestPlugins } = useApi.useApi();
    requestPlugins.add(listener);
    watchState.onDestroy(() => {
        requestPlugins.delete(listener);
    });
}

exports.useRequestPlugin = useRequestPlugin;
