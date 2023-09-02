import { RulesError, addKey } from '../helpers.es6.js';

function tupleOf(rules) {
    return (value, data) => {
        if (value === undefined) {
            throw new RulesError('tuple', data);
        }
        else if (!Array.isArray(value)) {
            value = [value];
        }
        const result = [];
        for (let index = 0; index < rules.length; index++) {
            result.push(rules[index](value[index], Object.assign(Object.assign({}, data), { key: addKey(index, data) })));
        }
        return result;
    };
}

export { tupleOf };
