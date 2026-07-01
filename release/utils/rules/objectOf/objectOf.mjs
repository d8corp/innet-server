import { RulesError, addKey } from '../helpers.mjs';

function objectOf(map, rest) {
    return (value, data) => {
        if (value === null || typeof value !== 'object') {
            throw new RulesError('object', {
                value,
                ...data,
            });
        }
        const result = {};
        for (const key in map) {
            const val = map[key](value[key], { ...data, key: addKey(key, data) });
            if (val !== undefined) {
                result[key] = val;
            }
        }
        if (rest) {
            for (const key in value) {
                if (key in map)
                    continue;
                const val = rest(value[key], { ...data, key: addKey(key, data) });
                if (val !== undefined) {
                    result[key] = val;
                }
            }
        }
        return result;
    };
}

export { objectOf };
