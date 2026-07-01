import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { values, getArrayValues } from '../../../utils/rules/values/values.mjs';
import { minLength } from '../../../utils/rules/minLength/minLength.mjs';
import { maxLength } from '../../../utils/rules/maxLength/maxLength.mjs';
import { pattern } from '../../../utils/rules/pattern/pattern.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.mjs';

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
