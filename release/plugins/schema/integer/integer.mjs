import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { getArrayValues, values } from '../../../utils/rules/values/values.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { int } from '../../../utils/rules/int/int.mjs';
import { min } from '../../../utils/rules/min/min.mjs';
import { max } from '../../../utils/rules/max/max.mjs';
import { multipleOf } from '../../../utils/rules/multipleOf/multipleOf.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';
import { optional } from '../../../utils/rules/optional/optional.mjs';

const integer = () => {
    const { default: defaultValue, example, examples, exclusive, format = 'int32', max: max$1, min: min$1, multipleOf: multipleOf$1, values: values$1, ...props } = useProps() || {};
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const exclusiveMinimum = exclusive && ['min', true].includes(exclusive);
    const exclusiveMaximum = exclusive && ['max', true].includes(exclusive);
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
    if (defaultValue !== undefined) {
        rules.push(defaultTo(defaultValue));
    }
    rules.push(int(format));
    if (values$1) {
        rules.push(values(getArrayValues(values$1).filter((v) => v !== null).map(v => int(format)(v))));
    }
    if (min$1 !== undefined) {
        rules.push(min(min$1, exclusiveMinimum));
    }
    if (max$1 !== undefined) {
        rules.push(max(max$1, exclusiveMaximum));
    }
    if (multipleOf$1) {
        rules.push(multipleOf(multipleOf$1));
    }
    const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules);
    if (defaultValue === undefined) {
        useRule(optional(rule));
    }
    else {
        useRule(rule);
    }
};

export { integer };
