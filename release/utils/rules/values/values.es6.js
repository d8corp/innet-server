import { RulesError } from '../helpers.es6.js';

function getArrayValues(values) {
    // @ts-expect-error TODO: Fix types
    return Array.isArray(values) ? values : Object.keys(values);
}
function values(values) {
    return (value, data) => {
        if (!values.includes(value)) {
            throw new RulesError('values', {
                ...data,
                value,
                values,
            });
        }
        return value;
    };
}

export { getArrayValues, values };
