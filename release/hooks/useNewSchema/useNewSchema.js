'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useSchemaContext/index.js');
require('../useThrow/index.js');
var useSchemaContext = require('../useSchemaContext/useSchemaContext.js');
var useThrow = require('../useThrow/useThrow.js');

function useNewSchema(schema = Object.create(null)) {
    const parentSchema = useSchemaContext.useSchemaContext();
    if (!parentSchema) {
        useThrow.useThrow('Use <{type}> inside one of <response>, <param> or <body>');
    }
    if (Array.isArray(parentSchema)) {
        parentSchema.push(schema);
    }
    else if (parentSchema.oneOf) {
        parentSchema.oneOf.push(schema);
    }
    else if (parentSchema.type) {
        const oldSchema = Object.assign({}, parentSchema);
        for (const key in parentSchema) {
            // @ts-expect-error: FIXME
            delete parentSchema[key];
        }
        parentSchema.oneOf = [oldSchema, schema];
    }
    else {
        Object.assign(parentSchema, schema);
        return parentSchema;
    }
    return schema;
}

exports.useNewSchema = useNewSchema;
