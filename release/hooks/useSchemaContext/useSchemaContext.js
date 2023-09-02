'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const schemaContext = new jsx.Context();
function useSchemaContext() {
    return jsx.useContext(schemaContext);
}

exports.schemaContext = schemaContext;
exports.useSchemaContext = useSchemaContext;
