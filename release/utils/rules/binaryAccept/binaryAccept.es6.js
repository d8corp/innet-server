import { RulesError } from '../helpers.es6.js';

function binaryAccept(accept) {
    const acceptChips = accept
        .split(',')
        .map(chip => chip.trim());
    const acceptExtensions = acceptChips
        .filter(chip => chip.startsWith('.'))
        .map(chip => chip.slice(1));
    const acceptTypes = acceptChips
        .filter(chip => !chip.startsWith('.'))
        .map(chip => chip.split('/', 2));
    return (value, data) => {
        for (let i = 0; i < acceptExtensions.length; i++) {
            if (value.extension === acceptExtensions[i])
                return value;
        }
        const [type1, type2] = value.type.split('/', 2);
        for (let i = 0; i < acceptTypes.length; i++) {
            const [acceptType1, acceptType2] = acceptTypes[i];
            if (acceptType1 !== '*' && acceptType1 !== type1)
                continue;
            if (acceptType2 !== '*' && acceptType2 !== type2)
                continue;
            return value;
        }
        throw new RulesError('binaryAccept', Object.assign({ value,
            accept }, data));
    };
}

export { binaryAccept };
