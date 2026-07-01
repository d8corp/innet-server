'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
require('../../../utils/dateFormat/index.js');
var useBodyContext = require('../../../hooks/useBodyContext/useBodyContext.js');
var dateFormat = require('../../../utils/dateFormat/dateFormat.js');
var values = require('../../../utils/rules/values/values.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var dateTo = require('../../../utils/rules/dateTo/dateTo.js');
var minDate = require('../../../utils/rules/minDate/minDate.js');
var maxDate = require('../../../utils/rules/maxDate/maxDate.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var oneOf = require('../../../utils/rules/oneOf/oneOf.js');
var nullable = require('../../../utils/rules/nullable/nullable.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');

const date = () => {
    const { default: defaultValue, example, examples, max, min, value, values: values$1, ...props } = jsx.useProps() || {};
    const isBody = Boolean(jsx.useContext(useBodyContext.bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const normMin = dateFormat.dateFormat(min);
    const normMax = dateFormat.dateFormat(max);
    const normDefault = dateFormat.dateFormat(defaultValue);
    const normExample = dateFormat.dateFormat(example);
    const normValues = values$1 && values.getArrayValues(values$1).map(dateFormat.dateFormat);
    // @ts-expect-error: FIXME
    const stringValues = normValues === null || normValues === void 0 ? void 0 : normValues.map(value => value.toISOString());
    const normExamples = examples === null || examples === void 0 ? void 0 : examples.map(dateFormat.dateFormat);
    const params = {
        ...props,
        default: defaultValue === 'now' ? undefined : normDefault === null || normDefault === void 0 ? void 0 : normDefault.toISOString(),
        example: normExample === null || normExample === void 0 ? void 0 : normExample.toISOString(),
        value: value instanceof Date ? value.toISOString() : typeof value === 'number' ? new Date(value).toISOString() : value,
        // @ts-expect-error: FIXME
        examples: normExamples === null || normExamples === void 0 ? void 0 : normExamples.map(example => example.toISOString()),
        values: stringValues,
    };
    const schema = useSchemaType.useSchemaType('string', params);
    const rules = [];
    if (defaultValue !== undefined) {
        rules.push(defaultTo.defaultTo(defaultValue === 'now' ? () => new Date(Date.now()) : normDefault));
    }
    rules.push(dateTo.dateTo);
    if (stringValues) {
        rules.push((value, data) => values.values(stringValues)(value.toISOString(), data));
    }
    // @ts-expect-error: FIXME
    schema.format = 'date-time';
    if (normMin) {
        // @ts-expect-error: FIXME
        schema['x-minimum'] = normMin.toISOString();
        rules.push(minDate.minDate(normMin));
    }
    if (normMax) {
        // @ts-expect-error: FIXME
        schema['x-maximum'] = normMax.toISOString();
        rules.push(maxDate.maxDate(normMax));
    }
    if (defaultValue === 'now') {
        // @ts-expect-error: FIXME
        schema['x-default'] = 'now';
    }
    if (!hasRules) {
        if (defaultValue !== undefined) {
            useRule.useRule(defaultTo.defaultTo(defaultValue === 'now' ? () => new Date(Date.now()) : normDefault));
        }
        return;
    }
    const rule = props.nullable ? oneOf.oneOf([nullable.nullable, pipe.pipe(...rules)]) : pipe.pipe(...rules);
    if (defaultValue === undefined) {
        const parentRule = useParentRule.useParentRule();
        useRule.useRule(parentRule(rule));
    }
    else {
        useRule.useRule(rule);
    }
};

exports.date = date;
