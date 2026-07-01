import { RulesError } from '../helpers.mjs';

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
