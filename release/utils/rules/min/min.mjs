import { RulesError } from '../helpers.mjs';

function min(min, exclusive) {
    return (value, data) => {
        if (!['bigint', 'number'].includes(typeof value)) {
            throw new RulesError('number', {
                ...data,
                value,
            });
        }
        if ((exclusive && value === min) || value < min) {
            throw new RulesError('minimum', {
                ...data,
                min,
                value,
            });
        }
        return value;
    };
}

export { min };
