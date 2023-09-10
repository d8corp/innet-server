'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const actionContext = new jsx.Context();
function useAction() {
    const action = jsx.useContext(actionContext);
    if (!action) {
        useThrow.useThrow('<{type}> MUST be in <request>, <preset> or <fallback>');
    }
    return action;
}

exports.actionContext = actionContext;
exports.useAction = useAction;
