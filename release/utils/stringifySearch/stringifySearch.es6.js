import qs from 'qs';

function stringifySearch(search, options) {
    return qs.stringify(search, Object.assign({ encode: false }, options));
}

export { stringifySearch };
