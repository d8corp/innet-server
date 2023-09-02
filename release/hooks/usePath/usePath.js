'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useAction/index.js');
var useAction = require('../useAction/useAction.js');

function usePath() {
    return useAction.useAction().path;
}

exports.usePath = usePath;
