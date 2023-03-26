'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

var actionContext = new jsx.Context();
function useAction() {
    var action = jsx.useContext(actionContext);
    if (!action) {
        throw Error('Use `useAction` in <action>');
    }
    return action;
}

exports.actionContext = actionContext;
exports.useAction = useAction;
