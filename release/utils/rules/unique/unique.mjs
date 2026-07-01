import { RulesError } from '../helpers.mjs';

function unique(value, data) {
    const uniqueValues = new Set(value);
    if (value.length !== uniqueValues.size) {
        throw new RulesError('unique', {
            ...data,
            value,
        });
    }
    return value;
}

export { unique };
