import { RulesError } from '../helpers.mjs';

function maxBin(max) {
    return (value, data) => {
        if (value.size > max) {
            throw new RulesError('maxBin', {
                max,
                value,
                ...data,
            });
        }
        return value;
    };
}

export { maxBin };
