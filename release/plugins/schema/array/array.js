'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var useBodyContext = require('../../../hooks/useBodyContext/useBodyContext.js');
var useSchemaContext = require('../../../hooks/useSchemaContext/useSchemaContext.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var unique = require('../../../utils/rules/unique/unique.js');
var minItems = require('../../../utils/rules/minItems/minItems.js');
var maxItems = require('../../../utils/rules/maxItems/maxItems.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var arrayOf = require('../../../utils/rules/arrayOf/arrayOf.js');
var oneOf = require('../../../utils/rules/oneOf/oneOf.js');
var nullable = require('../../../utils/rules/nullable/nullable.js');
var useEffect = require('../../../hooks/useEffect/useEffect.js');

const array = () => {
    useBlock.useBlock('path');
    const setRule = jsx.useContext(useRule.ruleContext);
    const handler = innet.useNewHandler();
    const { children, max, min, unique: unique$1, ...props } = jsx.useProps();
    const schema = useSchemaType.useSchemaType('array', props);
    const isBody = Boolean(jsx.useContext(useBodyContext.bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const fieldSchema = {};
    handler[useSchemaContext.schemaContext.key] = fieldSchema;
    schema.items = fieldSchema;
    if (max) {
        schema.maxItems = max;
    }
    if (min) {
        schema.minItems = min;
    }
    if (unique$1) {
        schema.uniqueItems = unique$1;
    }
    if (setRule && hasRules) {
        let oneOfRulesMap;
        const rules = [];
        const parentRule = useParentRule.useParentRule();
        if (props.default !== undefined) {
            rules.push(defaultTo.defaultTo(props.default));
        }
        if (unique$1) {
            rules.push(unique.unique);
        }
        if (min) {
            rules.push(minItems.minItems(min));
        }
        if (max) {
            rules.push(maxItems.maxItems(max));
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
                const mainRule = rootRule(oneOf.oneOf(oneOfRulesMap));
                setRule(props.nullable ? oneOf.oneOf([nullable.nullable, mainRule]) : mainRule);
            }
        });
        innet.innet(children, handler);
        useEffect.useEffect(() => {
            if (!oneOfRulesMap) {
                setRule(props.nullable ? oneOf.oneOf([nullable.nullable, rootRule(e => e)]) : rootRule(e => e));
            }
        });
        return;
    }
    innet.innet(children, handler);
};

exports.array = array;
