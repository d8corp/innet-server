import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { values, getArrayValues } from '../../../utils/rules/values/values.es6.js';
import { minLength } from '../../../utils/rules/minLength/minLength.es6.js';
import { maxLength } from '../../../utils/rules/maxLength/maxLength.es6.js';
import { pattern } from '../../../utils/rules/pattern/pattern.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';

const string = () => {
    const { format, max, min, pattern: pattern$1, patternId, ...props } = useProps() || {};
    const { refRules } = useApi();
    const schema = useSchemaType('string', props);
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    if (schema) {
        const rules = [];
        if (format !== undefined) {
            schema.format = format;
        }
        if (props.default !== undefined) {
            rules.push(defaultTo(props.default));
        }
        rules.push(String);
        if (props.values) {
            rules.push(values(getArrayValues(props.values)));
        }
        if (format !== undefined) {
            schema.format = format;
        }
        if (min !== undefined) {
            schema.minLength = min;
            rules.push(minLength(min));
        }
        if (max !== undefined) {
            schema.maxLength = max;
            rules.push(maxLength(max));
        }
        if (pattern$1 !== undefined) {
            schema.pattern = String(pattern$1);
            rules.push(pattern(pattern$1, patternId));
        }
        if (!hasRules)
            return;
        const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules);
        if (props.ref) {
            refRules[props.ref] = rule;
        }
        if (props.default !== undefined) {
            useRule(rule);
        }
        else {
            const parentRule = useParentRule();
            useRule(parentRule(rule));
        }
    }
    else if (props.ref && hasRules) {
        if (props.default !== undefined) {
            useRule(refRules[props.ref]);
        }
        else {
            const parentRule = useParentRule();
            useRule(parentRule(refRules[props.ref]));
        }
    }
};

export { string };
