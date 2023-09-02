'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var utils = require('@innet/utils');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var tupleOf = require('../../../utils/rules/tupleOf/tupleOf.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var required = require('../../../utils/rules/required/required.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const tuple = () => {
    useBlock.useBlock('path');
    const handler = innet.useNewHandler();
    const props = jsx.useProps();
    const schema = useSchemaType.useSchemaType('array', props);
    const children = jsx.useChildren();
    if (schema) {
        const schemas = [];
        handler[useSchemaContext.schemaContext.key] = schemas;
        // @ts-expect-error: FIXME
        schema.prefixItems = schemas;
        const rulesMap = [];
        const rules = [];
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(defaultTo.defaultTo(props.default));
        }
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(tupleOf.tupleOf(rulesMap));
        }
        else {
            const parentRule = useParentRule.useParentRule();
            rules.push(parentRule(tupleOf.tupleOf(rulesMap)));
        }
        useRule.useRule(pipe.pipe(...rules));
        useParentRule.parentRuleContext.set(handler, rule => required.required(rule));
        useRule.ruleContext.set(handler, rule => {
            rulesMap.push(rule);
        });
        innet__default["default"](children, handler);
        innet__default["default"](() => {
            if (!rulesMap.length) {
                throw Error('<tuple> MUST have content');
            }
        }, utils.callHandler);
    }
};

exports.tuple = tuple;
