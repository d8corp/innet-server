import { __rest } from 'tslib';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import '../../../utils/dateFormat/index.es6.js';
import { dateFormat } from '../../../utils/dateFormat/dateFormat.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { dateTo } from '../../../utils/rules/dateTo/dateTo.es6.js';
import { values } from '../../../utils/rules/values/values.es6.js';
import { minDate } from '../../../utils/rules/minDate/minDate.es6.js';
import { maxDate } from '../../../utils/rules/maxDate/maxDate.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';

const date = () => {
    const _a = useProps() || {}, { default: defaultValue, example, examples, max, min, values: values$1 } = _a, props = __rest(_a, ["default", "example", "examples", "max", "min", "values"]);
    const normMin = dateFormat(min);
    const normMax = dateFormat(max);
    const normDefault = dateFormat(defaultValue);
    const normExample = dateFormat(example);
    const normValues = values$1 === null || values$1 === void 0 ? void 0 : values$1.map(dateFormat);
    // @ts-expect-error: FIXME
    const stringValues = normValues === null || normValues === void 0 ? void 0 : normValues.map(value => value.toISOString());
    const normExamples = examples === null || examples === void 0 ? void 0 : examples.map(dateFormat);
    const schema = useSchemaType('string', Object.assign(Object.assign({}, props), { default: defaultValue === 'now' ? undefined : normDefault === null || normDefault === void 0 ? void 0 : normDefault.toISOString(), example: normExample === null || normExample === void 0 ? void 0 : normExample.toISOString(), 
        // @ts-expect-error: FIXME
        examples: normExamples === null || normExamples === void 0 ? void 0 : normExamples.map(example => example.toISOString()), values: stringValues }));
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
    if (defaultValue === undefined) {
        const parentRule = useParentRule();
        useRule(parentRule(pipe(...rules)));
    }
    else {
        useRule(pipe(...rules));
    }
};

export { date };
