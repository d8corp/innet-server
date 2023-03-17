'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useAction = require('../useAction/useAction.js');

function useSearch() {
    return useAction.useAction().search;
}

exports.useSearch = useSearch;
