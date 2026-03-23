import { RulesError } from '../helpers.es6.js';

function max(max) {
    return (value, data) => {
        if (!['bigint', 'number'].includes(typeof value)) {
            throw new RulesError('number', {
                ...data,
                value,
            });
        }
        if (value > max) {
            throw new RulesError('maximum', {
                ...data,
                max,
                value,
            });
        }
        return value;
    };
}

export { max };
