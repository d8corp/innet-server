import { RulesError, addKey } from '../helpers.es6.js';

function arrayOf(formatter) {
    return (value, data) => {
        if (value === undefined) {
            throw new RulesError('array', data);
        }
        else if (!Array.isArray(value)) {
            value = [value];
        }
        return value.map((val, index) => formatter(val, Object.assign(Object.assign({}, data), { key: addKey(index, data) })));
    };
}

export { arrayOf };
