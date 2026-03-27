import { useProps } from '@innet/jsx';
import { v4 } from 'uuid';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { uuidTo } from '../../../utils/rules/uuidTo/uuidTo.es6.js';
import { values, getArrayValues } from '../../../utils/rules/values/values.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { optional } from '../../../utils/rules/optional/optional.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';

const uuid = () => {
    const { default: defaultValue, ...props } = useProps();
    const schema = useSchemaType('string', {
        ...props,
        default: defaultValue === 'new' ? undefined : defaultValue,
    });
    // @ts-expect-error: FIXME
    schema.format = 'uuid';
    if (defaultValue === 'new') {
        // @ts-expect-error: FIXME
        schema['x-default'] = defaultValue;
    }
    const rules = [];
    if (defaultValue !== undefined) {
        rules.push(defaultTo(defaultValue === 'new' ? v4 : defaultValue));
    }
    rules.push(uuidTo);
    if (props.values) {
        rules.push(values(getArrayValues(props.values)));
    }
    if (defaultValue === undefined) {
        useRule(optional(pipe(...rules)));
    }
    else {
        useRule(pipe(...rules));
    }
};

export { uuid };
