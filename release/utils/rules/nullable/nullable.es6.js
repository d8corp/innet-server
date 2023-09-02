import { RulesError } from '../helpers.es6.js';

function nullable(value, data) {
    if (value !== null) {
        throw new RulesError('null', data);
    }
    return null;
}

export { nullable };
