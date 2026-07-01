import { RulesError } from '../helpers.mjs';

const sizes = {
    int32: 2147483647,
    int64: BigInt('9223372036854775807'),
};
function int(format) {
    return (value, data) => {
        let result;
        if (format === 'int32') {
            result = parseInt(value);
        }
        else {
            try {
                result = BigInt(value);
            }
            catch (e) {
                result = NaN;
            }
        }
        if (Number.isNaN(result)) {
            throw new RulesError('integer', {
                format,
                value,
                ...data,
            });
        }
        if (result > sizes[format]) {
            throw new RulesError('integer', {
                format,
                max: sizes[format],
                value: result,
                ...data,
            });
        }
        if (result < -sizes[format]) {
            throw new RulesError('integer', {
                format,
                min: -sizes[format],
                value: result,
                ...data,
            });
        }
        return result;
    };
}

export { int };
