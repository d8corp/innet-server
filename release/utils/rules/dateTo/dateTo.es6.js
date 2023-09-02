import { RulesError } from '../helpers.es6.js';

function dateTo(value, data) {
    const result = new Date(value);
    if (isNaN(result)) {
        throw new RulesError('date', Object.assign({ value }, data));
    }
    return result;
}

export { dateTo };
