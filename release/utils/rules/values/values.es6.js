import { RulesError } from '../helpers.es6.js';

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

export { values };
