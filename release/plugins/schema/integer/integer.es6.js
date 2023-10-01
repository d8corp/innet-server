import { __rest } from 'tslib';
import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { int } from '../../../utils/rules/int/int.es6.js';
import { values } from '../../../utils/rules/values/values.es6.js';
import { min } from '../../../utils/rules/min/min.es6.js';
import { max } from '../../../utils/rules/max/max.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { optional } from '../../../utils/rules/optional/optional.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';

const integer = () => {
    const _a = useProps() || {}, { default: defaultValue, example, examples, format = 'int32', max: max$1, min: min$1, values: values$1 } = _a, props = __rest(_a, ["default", "example", "examples", "format", "max", "min", "values"]);
    const schema = useSchemaType('integer', Object.assign(Object.assign({}, props), { default: defaultValue !== undefined ? Number(defaultValue) : undefined, example: example !== undefined ? Number(example) : undefined, examples: examples === null || examples === void 0 ? void 0 : examples.map(Number), values: values$1 === null || values$1 === void 0 ? void 0 : values$1.map(Number) }));
    // @ts-expect-error: FIXME
    schema.format = format;
    // @ts-expect-error: FIXME
    schema.minimum = min$1 !== undefined ? Number(min$1) : undefined;
    // @ts-expect-error: FIXME
    schema.maximum = max$1 !== undefined ? Number(max$1) : undefined;
    const rules = [];
    if (defaultValue !== undefined) {
        rules.push(defaultTo(defaultValue));
    }
    rules.push(int(format));
    if (values$1) {
        rules.push(values(values$1.map(value => int(format)(value))));
    }
    if (min$1 !== undefined) {
        rules.push(min(min$1));
    }
    if (max$1 !== undefined) {
        rules.push(max(max$1));
    }
    if (defaultValue === undefined) {
        useRule(optional(pipe(...rules)));
    }
    else {
        useRule(pipe(...rules));
    }
};

export { integer };
