import { RulesError } from '../helpers.es6.js';

const sizes = {
    int32: 2147483647,
    int64: BigInt('9223372036854775807'),
};
function int(format) {
    const validator = format === 'int32' ? isNaN : (value) => isNaN(parseInt(value));
    return (value, data) => {
        let result;
        if (format === 'int32') {
            result = Number(value);
        }
        else {
            try {
                result = BigInt(value);
            }
            catch (e) {
                result = NaN;
            }
        }
        if (validator(result)) {
            throw new RulesError('integer', Object.assign({ format,
                value }, data));
        }
        if (result > sizes[format]) {
            throw new RulesError('integer', Object.assign({ format, value: result, max: sizes[format] }, data));
        }
        if (result < -sizes[format]) {
            throw new RulesError('integer', Object.assign({ format, value: result, min: -sizes[format] }, data));
        }
        return result;
    };
}

export { int };
