'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useAction/index.js');
require('../useThrow/index.js');
var useAction = require('../useAction/useAction.js');
var useThrow = require('../useThrow/useThrow.js');

function useSearch() {
    const action = useAction.useAction();
    if (!action) {
        useThrow.useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    return action.search;
}

exports.useSearch = useSearch;
