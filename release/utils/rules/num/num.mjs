import { RulesError } from '../helpers.mjs';

function num(value, data) {
    const result = Number(value);
    if (Number.isNaN(result) || result > Number.MAX_SAFE_INTEGER || result < -Number.MAX_SAFE_INTEGER) {
        throw new RulesError('number', {
            value,
            ...data,
        });
    }
    return result;
}

export { num };
