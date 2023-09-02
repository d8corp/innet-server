import { RulesError } from '../helpers.es6.js';

function required(rule) {
    return (value, data) => {
        if (value === undefined) {
            throw new RulesError('required', data);
        }
        return rule === null || rule === void 0 ? void 0 : rule(value, data);
    };
}

export { required };
