'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('../helpers.js');

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
            throw new helpers.RulesError('integer', Object.assign({ format,
                value }, data));
        }
        if (result > sizes[format]) {
            throw new helpers.RulesError('integer', Object.assign({ format, max: sizes[format], value: result }, data));
        }
        if (result < -sizes[format]) {
            throw new helpers.RulesError('integer', Object.assign({ format, min: -sizes[format], value: result }, data));
        }
        return result;
    };
}

exports.int = int;
