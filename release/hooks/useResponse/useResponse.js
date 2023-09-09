'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useAction/index.js');
var useAction = require('../useAction/useAction.js');

function useResponse() {
    return useAction.useAction().res;
}

exports.useResponse = useResponse;
