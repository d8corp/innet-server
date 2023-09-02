import { RulesError } from '../helpers.es6.js';

function num(value, data) {
    const result = Number(value);
    if (isNaN(result) || result > Number.MAX_SAFE_INTEGER || result < -Number.MAX_SAFE_INTEGER) {
        throw new RulesError('number', Object.assign({ value }, data));
    }
    return result;
}

export { num };
