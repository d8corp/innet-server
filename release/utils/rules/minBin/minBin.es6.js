import { RulesError } from '../helpers.es6.js';

function minBin(min) {
    return (value, data) => {
        if (value.size < min) {
            throw new RulesError('minBin', Object.assign({ value,
                min }, data));
        }
        return value;
    };
}

export { minBin };
