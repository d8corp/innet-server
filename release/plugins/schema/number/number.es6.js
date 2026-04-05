import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { num } from '../../../utils/rules/num/num.es6.js';
import { values, getArrayValues } from '../../../utils/rules/values/values.es6.js';
import { min } from '../../../utils/rules/min/min.es6.js';
import { max } from '../../../utils/rules/max/max.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';

const number = () => {
    const { exclusiveMaximum, exclusiveMinimum, format, max: max$1, min: min$1, multipleOf, ...props } = useProps() || {};
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
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
    if (props.default !== undefined) {
        rules.push(defaultTo(props.default));
    }
    rules.push(num);
    if (props.values) {
        rules.push(values(getArrayValues(props.values).map(Number)));
    }
    if (min$1 !== undefined) {
        rules.push(min(min$1));
    }
    if (max$1 !== undefined) {
        rules.push(max(max$1));
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
