'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var helpers = require('./helpers.js');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useBodyContext = require('../../../hooks/useBodyContext/useBodyContext.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var useObjectSchemaContext = require('../../../hooks/useObjectSchemaContext/useObjectSchemaContext.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useEffect = require('../../../hooks/useEffect/useEffect.js');
var getSafeSchema = require('../../../utils/getSafeSchema/getSafeSchema.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var objectOf = require('../../../utils/rules/objectOf/objectOf.js');
var oneOf = require('../../../utils/rules/oneOf/oneOf.js');
var nullable = require('../../../utils/rules/nullable/nullable.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var useObjectRule = require('../../../hooks/useObjectRule/useObjectRule.js');

const object = () => {
    useBlock.useBlock('path');
    const { children, ...props } = jsx.useProps();
    const isBody = Boolean(jsx.useContext(useBodyContext.bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const { refRules } = useApi.useApi();
    const schema = useSchemaType.useSchemaType('object', props);
    const handler = innet.useNewHandler();
    if (schema) {
        schema.additionalProperties = {};
        useObjectSchemaContext.objectSchemaContext.set(handler, schema);
        useSchemaContext.schemaContext.set(handler, schema.additionalProperties);
        useParentRule.parentRuleContext.reset(handler);
        useEffect.useEffect(() => {
            const safeSchema = getSafeSchema.getSafeSchema(schema);
            if (!Object.keys(safeSchema.additionalProperties).length) {
                delete safeSchema.additionalProperties;
            }
        });
        if (hasRules) {
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
            const rule = props.nullable ? oneOf.oneOf([nullable.nullable, pipe.pipe(...rules)]) : pipe.pipe(...rules);
            if (props.ref) {
                refRules[props.ref] = rule;
            }
            useRule.useRule(rule);
            useObjectRule.objectRuleContext.set(handler, rulesMap);
            useRule.ruleContext.set(handler, rule => {
                childRule = rule;
            });
            useParentRule.parentRuleContext.reset(handler);
        }
        innet.innet(helpers.formatObjectChildren(children), handler);
    }
    else if (props.ref && hasRules) {
        useRule.useRule(refRules[props.ref]);
    }
};

exports.object = object;
