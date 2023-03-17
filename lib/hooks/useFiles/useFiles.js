'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useAction = require('../useAction/useAction.js');

function useFiles() {
    return useAction.useAction().files;
}

exports.useFiles = useFiles;
