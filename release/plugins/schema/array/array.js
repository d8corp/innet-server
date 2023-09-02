'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var utils = require('@innet/utils');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var arrayOf = require('../../../utils/rules/arrayOf/arrayOf.js');
var oneOf = require('../../../utils/rules/oneOf/oneOf.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const array = () => {
    useBlock.useBlock('path');
    const setRule = jsx.useContext(useRule.ruleContext);
    const handler = innet.useNewHandler();
    const props = jsx.useProps();
    const schema = useSchemaType.useSchemaType('array', props);
    const children = jsx.useChildren();
    const fieldSchema = {};
    handler[useSchemaContext.schemaContext.key] = fieldSchema;
    schema.items = fieldSchema;
    if (setRule) {
        let oneOfRulesMap;
        const rules = [];
        const parentRule = useParentRule.useParentRule();
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(defaultTo.defaultTo(props.default));
        }
        const rootRule = (props === null || props === void 0 ? void 0 : props.default) === undefined
            ? (rule) => parentRule(pipe.pipe(...rules, arrayOf.arrayOf(rule)))
            : (rule) => pipe.pipe(...rules, arrayOf.arrayOf(rule));
        useParentRule.parentRuleContext.reset(handler);
        useRule.ruleContext.set(handler, rule => {
            if (oneOfRulesMap) {
                oneOfRulesMap.push(rule);
            }
            else {
                oneOfRulesMap = [rule];
                setRule(rootRule(oneOf.oneOf(oneOfRulesMap)));
            }
        });
        innet__default["default"](children, handler);
        innet__default["default"](() => {
            if (!oneOfRulesMap && setRule) {
                setRule(rootRule(e => e));
            }
        }, utils.callHandler);
        return;
    }
    innet__default["default"](children, handler);
};

exports.array = array;
