import { RulesError } from '../helpers.es6.js';

const UUID_REG = /^[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/;
function uuidTo(value, data) {
    if (!UUID_REG.test(value)) {
        throw new RulesError('uuid', data);
    }
    return value;
}

export { uuidTo };
