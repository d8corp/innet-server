import { __rest } from 'tslib';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { values } from '../../../utils/rules/values/values.es6.js';
import { minLength } from '../../../utils/rules/minLength/minLength.es6.js';
import { maxLength } from '../../../utils/rules/maxLength/maxLength.es6.js';
import { pattern } from '../../../utils/rules/pattern/pattern.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';

const string = () => {
    const _a = useProps() || {}, { min, max, pattern: pattern$1, patternId } = _a, props = __rest(_a, ["min", "max", "pattern", "patternId"]);
    const schema = useSchemaType('string', props);
    const rules = [];
    if (props.default !== undefined) {
        rules.push(defaultTo(props.default));
    }
    rules.push(String);
    if (props.values) {
        rules.push(values(props.values));
    }
    if (min !== undefined) {
        // @ts-expect-error: FIXME
        schema.minimum = min;
        rules.push(minLength(min));
    }
    if (max !== undefined) {
        // @ts-expect-error: FIXME
        schema.maximum = max;
        rules.push(maxLength(max));
    }
    if (pattern$1 !== undefined) {
        // @ts-expect-error: FIXME
        schema.pattern = String(pattern$1);
        rules.push(pattern(pattern$1, patternId));
    }
    if (props.default) {
        useRule(pipe(...rules));
    }
    else {
        const parentRule = useParentRule();
        useRule(parentRule(pipe(...rules)));
    }
};

export { string };
