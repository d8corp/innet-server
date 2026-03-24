'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
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
var useEffect = require('../../../hooks/useEffect/useEffect.js');

const tuple = () => {
    useBlock.useBlock('path');
    const handler = innet.useNewHandler();
    const { children, ...props } = jsx.useProps();
    const schema = useSchemaType.useSchemaType('array', props);
    if (schema) {
        const schemas = [];
        handler[useSchemaContext.schemaContext.key] = schemas;
        // @ts-expect-error: FIXME
        schema.prefixItems = schemas;
        const rulesMap = [];
        const rules = [];
        if (props.default !== undefined) {
            rules.push(defaultTo.defaultTo(props.default));
        }
        if (props.default !== undefined) {
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
        innet.innet(children, handler);
        useEffect.useEffect(() => {
            if (!rulesMap.length) {
                throw Error('<tuple> MUST have content');
            }
        });
    }
};

exports.tuple = tuple;
