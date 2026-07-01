import { useProps, useContext } from '@innet/jsx';
import { v4 } from 'uuid';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { uuidTo } from '../../../utils/rules/uuidTo/uuidTo.mjs';
import { values, getArrayValues } from '../../../utils/rules/values/values.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { optional } from '../../../utils/rules/optional/optional.mjs';

const uuid = () => {
    const { default: defaultValue, ...props } = useProps();
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const params = {
        ...props,
    };
    if (defaultValue !== 'new') {
        params.default = defaultValue;
    }
    const schema = useSchemaType('string', params);
    if (schema) {
        schema.format = 'uuid';
        if (defaultValue === 'new') {
            // @ts-expect-error: FIXME
            schema['x-default'] = defaultValue;
        }
    }
    if (!hasRules) {
        if (defaultValue !== undefined) {
            useRule(defaultTo(defaultValue === 'new' ? v4 : defaultValue));
        }
        return;
    }
    const rules = [];
    if (defaultValue !== undefined) {
        rules.push(defaultTo(defaultValue === 'new' ? v4 : defaultValue));
    }
    rules.push(uuidTo);
    if (props.values) {
        rules.push(values(getArrayValues(props.values)));
    }
    const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules);
    if (defaultValue === undefined) {
        useRule(optional(rule));
    }
    else {
        useRule(rule);
    }
};

export { uuid };
