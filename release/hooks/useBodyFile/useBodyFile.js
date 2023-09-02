'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const bodyFileContext = new jsx.Context();
function useBodyFile() {
    const bodyFile = jsx.useContext(bodyFileContext);
    if (!bodyFile) {
        useThrow.useThrow('<{type}> MUST be in <body>');
    }
    bodyFile();
}

exports.bodyFileContext = bodyFileContext;
exports.useBodyFile = useBodyFile;
