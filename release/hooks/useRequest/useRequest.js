'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useAction/index.js');
var useAction = require('../useAction/useAction.js');

function useRequest() {
    return useAction.useAction().req;
}

exports.useRequest = useRequest;
