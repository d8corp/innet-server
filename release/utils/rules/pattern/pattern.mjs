import { RulesError } from '../helpers.mjs';

function pattern(pattern, patternId = String(pattern)) {
    const normPattern = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
    return (value, data) => {
        if (!normPattern.test(value)) {
            throw new RulesError('pattern', {
                pattern: String(normPattern),
                patternId,
                value,
                ...data,
            });
        }
        return value;
    };
}

export { pattern };
