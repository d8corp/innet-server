import { RulesError } from '../helpers.es6.js';

function oneOf(formatters) {
    return (value, data) => {
        const errors = [];
        for (const formatter of formatters) {
            try {
                return formatter(value, data);
            }
            catch (e) {
                errors.push(e.data);
            }
        }
        throw new RulesError('oneOf', { errors });
    };
}

export { oneOf };
