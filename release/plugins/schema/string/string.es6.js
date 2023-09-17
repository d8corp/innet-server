import { __rest } from 'tslib';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { values } from '../../../utils/rules/values/values.es6.js';
import { minLength } from '../../../utils/rules/minLength/minLength.es6.js';
import { maxLength } from '../../../utils/rules/maxLength/maxLength.es6.js';
import { pattern } from '../../../utils/rules/pattern/pattern.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';

const string = () => {
    const _a = useProps() || {}, { min, max, pattern: pattern$1, patternId } = _a, props = __rest(_a, ["min", "max", "pattern", "patternId"]);
    const { refRules } = useApi();
    const schema = useSchemaType('string', props);
    if (schema) {
        const rules = [];
        if (props.default !== undefined) {
            rules.push(defaultTo(props.default));
        }
        rules.push(String);
        if (props.values) {
            rules.push(values(props.values));
        }
        if (min !== undefined) {
            schema.minimum = min;
            rules.push(minLength(min));
        }
        if (max !== undefined) {
            schema.maximum = max;
            rules.push(maxLength(max));
        }
        if (pattern$1 !== undefined) {
            schema.pattern = String(pattern$1);
            rules.push(pattern(pattern$1, patternId));
        }
        const rule = pipe(...rules);
        if (props.ref) {
            refRules[props.ref] = rule;
        }
        if (props.default) {
            useRule(rule);
        }
        else {
            const parentRule = useParentRule();
            useRule(parentRule(rule));
        }
    }
    else if (props.ref) {
        if (props.default) {
            useRule(refRules[props.ref]);
        }
        else {
            const parentRule = useParentRule();
            useRule(parentRule(refRules[props.ref]));
        }
    }
};

export { string };
