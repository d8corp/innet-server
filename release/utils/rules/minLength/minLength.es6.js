import { RulesError } from '../helpers.es6.js';

function minLength(min) {
    return (value, data) => {
        if (typeof value !== 'string') {
            throw new RulesError('string', data);
        }
        if (value.length < min) {
            throw new RulesError('minLength', Object.assign(Object.assign({}, data), { value,
                min }));
        }
        return value;
    };
}

export { minLength };
