import { RulesError } from '../helpers.mjs';

function minLength(min) {
    return (value, data) => {
        if (typeof value !== 'string') {
            throw new RulesError('string', data);
        }
        if (value.length < min) {
            throw new RulesError('minLength', {
                ...data,
                min,
                value,
            });
        }
        return value;
    };
}

export { minLength };
