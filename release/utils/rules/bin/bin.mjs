import { RulesError } from '../helpers.mjs';
import '../../FileData/index.mjs';
import { Bin } from '../../FileData/Bin.mjs';

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
