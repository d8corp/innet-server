'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useAction/index.js');
var useAction = require('../useAction/useAction.js');

function useClientIp() {
    const action = useAction.useAction();
    return action.clientIp;
}

exports.useClientIp = useClientIp;
