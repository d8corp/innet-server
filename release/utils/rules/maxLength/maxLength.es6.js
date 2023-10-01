import { RulesError } from '../helpers.es6.js';

function maxLength(max) {
    return (value, data) => {
        if (typeof value !== 'string') {
            throw new RulesError('string', data);
        }
        if (value.length > max) {
            throw new RulesError('maxLength', Object.assign(Object.assign({}, data), { max,
                value }));
        }
        return value;
    };
}

export { maxLength };
