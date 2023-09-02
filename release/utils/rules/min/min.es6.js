import { RulesError } from '../helpers.es6.js';

function min(min) {
    return (value, data) => {
        if (!['number', 'bigint'].includes(typeof value)) {
            throw new RulesError('number', Object.assign(Object.assign({}, data), { value }));
        }
        if (value < min) {
            throw new RulesError('minimum', Object.assign(Object.assign({}, data), { value,
                min }));
        }
        return value;
    };
}

export { min };
