'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useAction/index.js');
var useAction = require('../useAction/useAction.js');

function useHeaders() {
    return useAction.useAction().headers;
}

exports.useHeaders = useHeaders;
