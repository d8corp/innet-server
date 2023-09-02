import { RulesError } from '../helpers.es6.js';

function max(max) {
    return (value, data) => {
        if (!['number', 'bigint'].includes(typeof value)) {
            throw new RulesError('number', Object.assign(Object.assign({}, data), { value }));
        }
        if (value > max) {
            throw new RulesError('maximum', Object.assign(Object.assign({}, data), { value,
                max }));
        }
        return value;
    };
}

export { max };
