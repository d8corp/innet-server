'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useBodyContext = require('../../../hooks/useBodyContext/useBodyContext.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var values = require('../../../utils/rules/values/values.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var int = require('../../../utils/rules/int/int.js');
var min = require('../../../utils/rules/min/min.js');
var max = require('../../../utils/rules/max/max.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var optional = require('../../../utils/rules/optional/optional.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');

const integer = () => {
    const { default: defaultValue, example, examples, exclusiveMaximum, exclusiveMinimum, format = 'int32', max: max$1, min: min$1, multipleOf, values: values$1, ...props } = jsx.useProps() || {};
    const isBody = Boolean(jsx.useContext(useBodyContext.bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const schema = useSchemaType.useSchemaType('integer', {
        ...props,
        default: defaultValue !== undefined ? Number(defaultValue) : undefined,
        example: example !== undefined ? Number(example) : undefined,
        examples: examples === null || examples === void 0 ? void 0 : examples.map(Number),
        value: props.value !== undefined ? Number(props.value) : undefined,
        values: values$1 && values.getArrayValues(values$1).map(Number),
    });
    if (schema) {
        if (format) {
            schema.format = format;
        }
        if (min$1 !== undefined) {
            schema.minimum = Number(min$1);
        }
        if (max$1 !== undefined) {
            schema.maximum = Number(max$1);
        }
        if (exclusiveMinimum) {
            schema.exclusiveMinimum = typeof exclusiveMinimum === 'boolean' ? exclusiveMinimum : Number(exclusiveMinimum);
        }
        if (exclusiveMaximum) {
            schema.exclusiveMaximum = typeof exclusiveMaximum === 'boolean' ? exclusiveMaximum : Number(exclusiveMaximum);
        }
        if (multipleOf !== undefined) {
            schema.multipleOf = Number(multipleOf);
        }
    }
    if (!hasRules)
        return;
    const rules = [];
    if (defaultValue !== undefined) {
        rules.push(defaultTo.defaultTo(defaultValue));
    }
    rules.push(int.int(format));
    if (values$1) {
        rules.push(values.values(values.getArrayValues(values$1).filter((v) => v !== null).map(v => int.int(format)(v))));
    }
    if (min$1 !== undefined) {
        rules.push(min.min(min$1));
    }
    if (max$1 !== undefined) {
        rules.push(max.max(max$1));
    }
    if (defaultValue === undefined) {
        useRule.useRule(optional.optional(pipe.pipe(...rules)));
    }
    else {
        useRule.useRule(pipe.pipe(...rules));
    }
};

exports.integer = integer;
