import { __rest } from 'tslib';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { num } from '../../../utils/rules/num/num.es6.js';
import { values } from '../../../utils/rules/values/values.es6.js';
import { min } from '../../../utils/rules/min/min.es6.js';
import { max } from '../../../utils/rules/max/max.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';

const number = () => {
    const _a = useProps() || {}, { max: max$1, min: min$1 } = _a, props = __rest(_a, ["max", "min"]);
    const schema = useSchemaType('number', props);
    // @ts-expect-error: FIXME
    schema.minimum = min$1;
    // @ts-expect-error: FIXME
    schema.maximum = max$1;
    const rules = [];
    if (props.default !== undefined) {
        rules.push(defaultTo(props.default));
    }
    rules.push(num);
    if (props.values) {
        rules.push(values(props.values));
    }
    if (min$1 !== undefined) {
        rules.push(min(min$1));
    }
    if (max$1 !== undefined) {
        rules.push(max(max$1));
    }
    if (props.default === undefined) {
        const rootRule = useParentRule();
        useRule(rootRule(pipe(...rules)));
    }
    else {
        useRule(pipe(...rules));
    }
};

export { number };
