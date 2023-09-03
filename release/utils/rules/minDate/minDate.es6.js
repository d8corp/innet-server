import { RulesError } from '../helpers.es6.js';

function minDate(min) {
    return (value, data) => {
        if (!(value instanceof Date)) {
            throw new RulesError('date', data);
        }
        if (value < min) {
            throw new RulesError('minDate', Object.assign(Object.assign({}, data), { value, min: min.toISOString() }));
        }
        return value;
    };
}

export { minDate };