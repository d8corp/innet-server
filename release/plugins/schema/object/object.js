'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var useObjectSchemaContext = require('../../../hooks/useObjectSchemaContext/useObjectSchemaContext.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var objectOf = require('../../../utils/rules/objectOf/objectOf.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var useObjectRule = require('../../../hooks/useObjectRule/useObjectRule.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const object = () => {
    useBlock.useBlock('path');
    const children = jsx.useChildren();
    const props = jsx.useProps() || {};
    const { refRules } = useApi.useApi();
    const schema = useSchemaType.useSchemaType('object', props);
    const handler = innet.useNewHandler();
    if (schema) {
        schema.additionalProperties = {};
        useObjectSchemaContext.objectSchemaContext.set(handler, schema);
        useSchemaContext.schemaContext.set(handler, schema.additionalProperties);
        useParentRule.parentRuleContext.reset(handler);
        const rules = [];
        const rulesMap = {};
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(defaultTo.defaultTo(props.default));
        }
        let childRule = v => v;
        const restRule = (value, data) => childRule(value, data);
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(objectOf.objectOf(rulesMap, restRule));
        }
        else {
            const parentRule = useParentRule.useParentRule();
            rules.push(parentRule(objectOf.objectOf(rulesMap, restRule)));
        }
        const rule = pipe.pipe(...rules);
        if (props.ref) {
            refRules[props.ref] = rule;
        }
        useRule.useRule(rule);
        useObjectRule.objectRuleContext.set(handler, rulesMap);
        useRule.ruleContext.set(handler, rule => {
            childRule = rule;
        });
        useParentRule.parentRuleContext.reset(handler);
        innet__default["default"](children, handler);
    }
    else if (props.ref) {
        useRule.useRule(refRules[props.ref]);
    }
};

exports.object = object;
