import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { getArrayValues, values } from '../../../utils/rules/values/values.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { int } from '../../../utils/rules/int/int.es6.js';
import { min } from '../../../utils/rules/min/min.es6.js';
import { max } from '../../../utils/rules/max/max.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { optional } from '../../../utils/rules/optional/optional.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';

const integer = () => {
    const { default: defaultValue, example, examples, exclusiveMaximum, exclusiveMinimum, format = 'int32', max: max$1, min: min$1, multipleOf, values: values$1, ...props } = useProps() || {};
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const schema = useSchemaType('integer', {
        ...props,
        default: defaultValue !== undefined ? Number(defaultValue) : undefined,
        example: example !== undefined ? Number(example) : undefined,
        examples: examples === null || examples === void 0 ? void 0 : examples.map(Number),
        value: props.value !== undefined ? Number(props.value) : undefined,
        values: values$1 && getArrayValues(values$1).map(Number),
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
        rules.push(defaultTo(defaultValue));
    }
    rules.push(int(format));
    if (values$1) {
        rules.push(values(getArrayValues(values$1).filter((v) => v !== null).map(v => int(format)(v))));
    }
    if (min$1 !== undefined) {
        rules.push(min(min$1));
    }
    if (max$1 !== undefined) {
        rules.push(max(max$1));
    }
    if (defaultValue === undefined) {
        useRule(optional(pipe(...rules)));
    }
    else {
        useRule(pipe(...rules));
    }
};

export { integer };
