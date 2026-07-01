import { RulesError } from '../helpers.mjs';

function minItems(min) {
    return (value, data) => {
        if (value.length < min) {
            throw new RulesError('minItems', {
                ...data,
                min,
                value,
            });
        }
        return value;
    };
}

export { minItems };
