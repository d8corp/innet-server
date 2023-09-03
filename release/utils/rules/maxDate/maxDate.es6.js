import { RulesError } from '../helpers.es6.js';

function maxDate(max) {
    return (value, data) => {
        if (!(value instanceof Date)) {
            throw new RulesError('date', data);
        }
        if (value > max) {
            throw new RulesError('maxDate', Object.assign(Object.assign({}, data), { value, max: max.toISOString() }));
        }
        return value;
    };
}

export { maxDate };