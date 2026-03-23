import { RulesError } from '../helpers.es6.js';

function minBin(min) {
    return (value, data) => {
        if (value.size < min) {
            throw new RulesError('minBin', {
                min,
                value,
                ...data,
            });
        }
        return value;
    };
}

export { minBin };
