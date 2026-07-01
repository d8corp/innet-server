'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBodyContext = require('../../../hooks/useBodyContext/useBodyContext.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var num = require('../../../utils/rules/num/num.js');
var values = require('../../../utils/rules/values/values.js');
var min = require('../../../utils/rules/min/min.js');
var max = require('../../../utils/rules/max/max.js');
var multipleOf = require('../../../utils/rules/multipleOf/multipleOf.js');
var oneOf = require('../../../utils/rules/oneOf/oneOf.js');
var nullable = require('../../../utils/rules/nullable/nullable.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');

const number = () => {
    const { exclusive, format, max: max$1, min: min$1, multipleOf: multipleOf$1, ...props } = jsx.useProps() || {};
    const isBody = Boolean(jsx.useContext(useBodyContext.bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const exclusiveMinimum = exclusive && ['min', true].includes(exclusive);
    const exclusiveMaximum = exclusive && ['max', true].includes(exclusive);
    const schema = useSchemaType.useSchemaType('number', props);
    if (schema) {
        if (format !== undefined) {
            schema.format = format;
        }
        if (min$1 !== undefined) {
            schema.minimum = min$1;
        }
        if (max$1 !== undefined) {
            schema.maximum = max$1;
        }
        if (exclusiveMinimum) {
            schema.exclusiveMinimum = true;
        }
        if (exclusiveMaximum) {
            schema.exclusiveMaximum = true;
        }
        if (multipleOf$1) {
            schema.multipleOf = Number(multipleOf$1);
        }
    }
    if (!hasRules)
        return;
    const rules = [];
    if (props.default !== undefined) {
        rules.push(defaultTo.defaultTo(props.default));
    }
    rules.push(num.num);
    if (props.values) {
        rules.push(values.values(values.getArrayValues(props.values).map(Number)));
    }
    if (min$1 !== undefined) {
        rules.push(min.min(min$1, exclusiveMinimum));
    }
    if (max$1 !== undefined) {
        rules.push(max.max(max$1, exclusiveMaximum));
    }
    if (multipleOf$1) {
        rules.push(multipleOf.multipleOf(multipleOf$1));
    }
    const rule = props.nullable ? oneOf.oneOf([nullable.nullable, pipe.pipe(...rules)]) : pipe.pipe(...rules);
    if (props.default === undefined) {
        const rootRule = useParentRule.useParentRule();
        useRule.useRule(rootRule(rule));
    }
    else {
        useRule.useRule(rule);
    }
};

exports.number = number;
