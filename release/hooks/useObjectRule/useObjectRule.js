'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const objectRuleContext = new jsx.Context(null);
function useObjectRule() {
    const map = jsx.useContext(objectRuleContext);
    if (!map) {
        useThrow.useThrow('Use <{type}> inside <object>');
    }
    return map;
}

exports.objectRuleContext = objectRuleContext;
exports.useObjectRule = useObjectRule;
