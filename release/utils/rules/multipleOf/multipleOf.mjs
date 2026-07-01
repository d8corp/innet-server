import { RulesError } from '../helpers.mjs';

function multipleOf(multiple) {
    return (value, data) => {
        if (!['bigint', 'number'].includes(typeof value)) {
            throw new RulesError('number', {
                ...data,
                value,
            });
        }
        if (value % multiple) {
            throw new RulesError('multipleOf', {
                ...data,
                multiple,
                value,
            });
        }
        return value;
    };
}

export { multipleOf };
