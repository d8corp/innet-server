'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
require('../../../utils/dateFormat/index.js');
var dateFormat = require('../../../utils/dateFormat/dateFormat.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var dateTo = require('../../../utils/rules/dateTo/dateTo.js');
var values = require('../../../utils/rules/values/values.js');
var minDate = require('../../../utils/rules/minDate/minDate.js');
var maxDate = require('../../../utils/rules/maxDate/maxDate.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');

const date = () => {
    const _a = jsx.useProps() || {}, { min, max, default: defaultValue, example, examples, values: values$1 } = _a, props = tslib.__rest(_a, ["min", "max", "default", "example", "examples", "values"]);
    const normMin = dateFormat.dateFormat(min);
    const normMax = dateFormat.dateFormat(max);
    const normDefault = dateFormat.dateFormat(defaultValue);
    const normExample = dateFormat.dateFormat(example);
    const normValues = values$1 === null || values$1 === void 0 ? void 0 : values$1.map(dateFormat.dateFormat);
    // @ts-expect-error: FIXME
    const stringValues = normValues === null || normValues === void 0 ? void 0 : normValues.map(value => value.toISOString());
    const normExamples = examples === null || examples === void 0 ? void 0 : examples.map(dateFormat.dateFormat);
    const schema = useSchemaType.useSchemaType('string', Object.assign(Object.assign({}, props), { values: stringValues, example: normExample === null || normExample === void 0 ? void 0 : normExample.toISOString(), 
        // @ts-expect-error: FIXME
        examples: normExamples === null || normExamples === void 0 ? void 0 : normExamples.map(example => example.toISOString()), default: defaultValue === 'now' ? undefined : normDefault === null || normDefault === void 0 ? void 0 : normDefault.toISOString() }));
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
    if (defaultValue === undefined) {
        const parentRule = useParentRule.useParentRule();
        useRule.useRule(parentRule(pipe.pipe(...rules)));
    }
    else {
        useRule.useRule(pipe.pipe(...rules));
    }
};

exports.date = date;
