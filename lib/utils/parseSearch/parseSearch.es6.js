import qs from 'qs';

function parseSearch(search, options) {
    return qs.parse(search, Object.assign({ ignoreQueryPrefix: true }, options));
}

export { parseSearch };
