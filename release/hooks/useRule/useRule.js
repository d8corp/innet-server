'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const ruleContext = new jsx.Context(null);
function useSetRule() {
    const setFormatter = jsx.useContext(ruleContext);
    if (!setFormatter) {
        useThrow.useThrow('Use <{type}> inside <endpoint>');
    }
    return setFormatter;
}
function useRule(rule) {
    useSetRule()(rule);
}

exports.ruleContext = ruleContext;
exports.useRule = useRule;
exports.useSetRule = useSetRule;
