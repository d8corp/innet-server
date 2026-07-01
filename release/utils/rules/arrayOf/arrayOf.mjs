import { RulesError, addKey } from '../helpers.mjs';

function arrayOf(formatter) {
    return (value, data) => {
        if (value === undefined) {
            throw new RulesError('array', data);
        }
        else if (!Array.isArray(value)) {
            value = [value];
        }
        return value.map((val, index) => formatter(val, { ...data, key: addKey(index, data) }));
    };
}

export { arrayOf };
