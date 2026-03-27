'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getSafeSchema(schema) {
    return 'oneOf' in schema ? schema.oneOf[0] : schema;
}

exports.getSafeSchema = getSafeSchema;
