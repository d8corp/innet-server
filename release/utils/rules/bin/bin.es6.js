import { RulesError } from '../helpers.es6.js';
import '../../FileData/index.es6.js';
import { Bin } from '../../FileData/Bin.es6.js';

function bin(value, data) {
    if (!(value instanceof Bin)) {
        throw new RulesError('binary', {
            value,
            ...data,
        });
    }
    return value;
}

export { bin };
