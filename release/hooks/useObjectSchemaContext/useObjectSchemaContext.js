'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const objectSchemaContext = new jsx.Context();
function useObjectSchemaContext() {
    const schema = jsx.useContext(objectSchemaContext);
    if (!schema) {
        useThrow.useThrow('Use <{type}> in <object>');
    }
    return schema;
}

exports.objectSchemaContext = objectSchemaContext;
exports.useObjectSchemaContext = useObjectSchemaContext;
