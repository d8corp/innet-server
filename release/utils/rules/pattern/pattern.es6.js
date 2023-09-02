import { RulesError } from '../helpers.es6.js';

function pattern(pattern, patternId = String(pattern)) {
    const normPattern = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
    return (value, data) => {
        if (!normPattern.test(value)) {
            throw new RulesError('pattern', Object.assign({ value, pattern: String(normPattern), patternId }, data));
        }
        return value;
    };
}

export { pattern };
