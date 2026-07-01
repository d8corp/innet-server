import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import '../../../utils/dateFormat/index.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { dateFormat } from '../../../utils/dateFormat/dateFormat.mjs';
import { getArrayValues, values } from '../../../utils/rules/values/values.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { dateTo } from '../../../utils/rules/dateTo/dateTo.mjs';
import { minDate } from '../../../utils/rules/minDate/minDate.mjs';
import { maxDate } from '../../../utils/rules/maxDate/maxDate.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.mjs';

const date = () => {
    const { default: defaultValue, example, examples, max, min, value, values: values$1, ...props } = useProps() || {};
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const normMin = dateFormat(min);
    const normMax = dateFormat(max);
    const normDefault = dateFormat(defaultValue);
    const normExample = dateFormat(example);
    const normValues = values$1 && getArrayValues(values$1).map(dateFormat);
    // @ts-expect-error: FIXME
    const stringValues = normValues === null || normValues === void 0 ? void 0 : normValues.map(value => value.toISOString());
    const normExamples = examples === null || examples === void 0 ? void 0 : examples.map(dateFormat);
    const params = {
        ...props,
        default: defaultValue === 'now' ? undefined : normDefault === null || normDefault === void 0 ? void 0 : normDefault.toISOString(),
        example: normExample === null || normExample === void 0 ? void 0 : normExample.toISOString(),
        value: value instanceof Date ? value.toISOString() : typeof value === 'number' ? new Date(value).toISOString() : value,
        // @ts-expect-error: FIXME
        examples: normExamples === null || normExamples === void 0 ? void 0 : normExamples.map(example => example.toISOString()),
        values: stringValues,
    };
    const schema = useSchemaType('string', params);
    const rules = [];
    if (defaultValue !== undefined) {
        rules.push(defaultTo(defaultValue === 'now' ? () => new Date(Date.now()) : normDefault));
    }
    rules.push(dateTo);
    if (stringValues) {
        rules.push((value, data) => values(stringValues)(value.toISOString(), data));
    }
    // @ts-expect-error: FIXME
    schema.format = 'date-time';
    if (normMin) {
        // @ts-expect-error: FIXME
        schema['x-minimum'] = normMin.toISOString();
        rules.push(minDate(normMin));
    }
    if (normMax) {
        // @ts-expect-error: FIXME
        schema['x-maximum'] = normMax.toISOString();
        rules.push(maxDate(normMax));
    }
    if (defaultValue === 'now') {
        // @ts-expect-error: FIXME
        schema['x-default'] = 'now';
    }
    if (!hasRules) {
        if (defaultValue !== undefined) {
            useRule(defaultTo(defaultValue === 'now' ? () => new Date(Date.now()) : normDefault));
        }
        return;
    }
    const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules);
    if (defaultValue === undefined) {
        const parentRule = useParentRule();
        useRule(parentRule(rule));
    }
    else {
        useRule(rule);
    }
};

export { date };
