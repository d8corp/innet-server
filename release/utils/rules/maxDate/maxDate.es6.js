import { RulesError } from '../helpers.es6.js';

function maxDate(max) {
    return (value, data) => {
        if (!(value instanceof Date)) {
            throw new RulesError('date', data);
        }
        if (value > max) {
            throw new RulesError('maxDate', {
                ...data,
                max: max.toISOString(),
                value,
            });
        }
        return value;
    };
}

export { maxDate };
