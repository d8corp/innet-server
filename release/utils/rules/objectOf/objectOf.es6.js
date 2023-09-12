import { RulesError, addKey } from '../helpers.es6.js';

function objectOf(map, rest) {
    return (value, data) => {
        if (value === null || typeof value !== 'object') {
            throw new RulesError('object', Object.assign({ value }, data));
        }
        const result = {};
        for (const key in map) {
            const val = map[key](value[key], Object.assign(Object.assign({}, data), { key: addKey(key, data) }));
            if (val !== undefined) {
                result[key] = val;
            }
        }
        if (rest) {
            for (const key in value) {
                if (key in map)
                    continue;
                const val = rest(value[key], Object.assign(Object.assign({}, data), { key: addKey(key, data) }));
                if (val !== undefined) {
                    result[key] = val;
                }
            }
        }
        return result;
    };
}

export { objectOf };
