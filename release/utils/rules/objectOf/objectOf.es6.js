import { RulesError, addKey } from '../helpers.es6.js';

function objectOf(map) {
    return (value, data) => {
        if (value === null || typeof value !== 'object') {
            throw new RulesError('object', Object.assign({ value }, data));
        }
        const result = {};
        for (const key in map) {
            result[key] = map[key](value[key], Object.assign(Object.assign({}, data), { key: addKey(key, data) }));
        }
        return result;
    };
}

export { objectOf };
