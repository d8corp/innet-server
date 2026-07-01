import { RulesError } from '../helpers.mjs';

function maxItems(max) {
    return (value, data) => {
        if (value.length > max) {
            throw new RulesError('maxItems', {
                ...data,
                max,
                value,
            });
        }
        return value;
    };
}

export { maxItems };
