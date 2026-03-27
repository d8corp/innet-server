import { RulesError } from '../helpers.es6.js';

function getArrayValues(values, format = (value => value)) {
    return Array.isArray(values) ? values.map(format) : Object.keys(values).map(format);
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
