'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useApi/index.js');
require('../useNewSchema/index.js');
var useApi = require('../useApi/useApi.js');
var useNewSchema = require('../useNewSchema/useNewSchema.js');

function useSchemaType(type, { example, examples, ref, values, ...options } = {}) {
    var _a;
    if (ref) {
        const { docs } = useApi.useApi();
        if (!docs.components) {
            docs.components = {};
        }
        if (!docs.components.schemas) {
            docs.components.schemas = {};
        }
        useNewSchema.useNewSchema({
            $ref: `#/components/schemas/${ref}`,
        });
        if ((_a = docs.components.schemas) === null || _a === void 0 ? void 0 : _a[ref]) {
            return;
        }
        return (docs.components.schemas[ref] = {
            ...options,
            enum: values,
            example,
            examples,
            type: type === 'any' ? undefined : type,
        });
    }
    return useNewSchema.useNewSchema({
        ...options,
        enum: values,
        example,
        examples,
        type: type === 'any' ? undefined : type,
    });
}

exports.useSchemaType = useSchemaType;
