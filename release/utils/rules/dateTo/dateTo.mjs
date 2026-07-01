import { RulesError } from '../helpers.mjs';

function dateTo(value, data) {
    const result = new Date(value);
    if (Number.isNaN(result)) {
        throw new RulesError('date', {
            value,
            ...data,
        });
    }
    return result;
}

export { dateTo };
