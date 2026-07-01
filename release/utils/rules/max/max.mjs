import { RulesError } from '../helpers.mjs';

function max(max, exclusive) {
    return (value, data) => {
        if (!['bigint', 'number'].includes(typeof value)) {
            throw new RulesError('number', {
                ...data,
                value,
            });
        }
        if ((exclusive && value === max) || value > max) {
            throw new RulesError('maximum', {
                ...data,
                exclusive,
                max,
                value,
            });
        }
        return value;
    };
}

export { max };
