import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { num } from '../../../utils/rules/num/num.mjs';
import { values, getArrayValues } from '../../../utils/rules/values/values.mjs';
import { min } from '../../../utils/rules/min/min.mjs';
import { max } from '../../../utils/rules/max/max.mjs';
import { multipleOf } from '../../../utils/rules/multipleOf/multipleOf.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';

const number = () => {
    const { exclusive, format, max: max$1, min: min$1, multipleOf: multipleOf$1, ...props } = useProps() || {};
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const exclusiveMinimum = exclusive && ['min', true].includes(exclusive);
    const exclusiveMaximum = exclusive && ['max', true].includes(exclusive);
    const schema = useSchemaType('number', props);
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
        rules.push(defaultTo(props.default));
    }
    rules.push(num);
    if (props.values) {
        rules.push(values(getArrayValues(props.values).map(Number)));
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
    if (props.default === undefined) {
        const rootRule = useParentRule();
        useRule(rootRule(rule));
    }
    else {
        useRule(rule);
    }
};

export { number };
