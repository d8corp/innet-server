import { RulesError } from '../helpers.es6.js';

function maxBin(max) {
    return (value, data) => {
        if (value.size > max) {
            throw new RulesError('maxBin', Object.assign({ value,
                max }, data));
        }
        return value;
    };
}

export { maxBin };
