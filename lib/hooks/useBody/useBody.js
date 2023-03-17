'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useAction = require('../useAction/useAction.js');

function useBody() {
    return useAction.useAction().body;
}

exports.useBody = useBody;
