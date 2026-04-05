import { useProps, useContext } from '@innet/jsx';
import { v4 } from 'uuid';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { uuidTo } from '../../../utils/rules/uuidTo/uuidTo.es6.js';
import { values, getArrayValues } from '../../../utils/rules/values/values.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { optional } from '../../../utils/rules/optional/optional.es6.js';

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
    // @ts-expect-error: FIXME
    schema.format = 'uuid';
    if (defaultValue === 'new') {
        // @ts-expect-error: FIXME
        schema['x-default'] = defaultValue;
    }
    if (!hasRules)
        return;
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
