'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../utils/index.js');
var optional = require('../../utils/rules/optional/optional.js');

const parentRuleContext = new jsx.Context(rule => optional.optional(rule));
function useParentRule() {
    return jsx.useContext(parentRuleContext);
}

exports.parentRuleContext = parentRuleContext;
exports.useParentRule = useParentRule;
