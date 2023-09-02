import qs from 'qs';

const EMPTY_SEARCH = {};
function parseSearch(search, options) {
    if (!search)
        return EMPTY_SEARCH;
    return qs.parse(search, Object.assign({ ignoreQueryPrefix: true }, options));
}

export { EMPTY_SEARCH, parseSearch };
