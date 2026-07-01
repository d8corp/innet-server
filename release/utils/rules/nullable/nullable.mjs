import { RulesError } from '../helpers.mjs';

function nullable(value, data) {
    if (value !== null && value !== 'null') {
        throw new RulesError('null', data);
    }
    return null;
}

export { nullable };
